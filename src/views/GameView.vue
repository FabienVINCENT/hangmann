<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import HangmanBoy from "@/components/hangman/HangmanBoy.vue";
import Keyboard from "@/components/Keyboard.vue";
import type { Letter } from "@/model/letter";
import Word from "@/components/Word.vue";
import wordsList from "@/words.json";

const step = ref(0);
const word = ref<Letter[]>([]);
const wrongLetters = ref<Letter[]>([]);
const rightLetters = ref<Letter[]>([]);
const isWinner = ref(false);

const init = () => {
  step.value = 0;
  wrongLetters.value = [];
  rightLetters.value = [];
  // Choose word
  const randomWord = wordsList[Math.floor(Math.random() * wordsList.length)];
  word.value = randomWord.split("") as Letter[];
};

const increment = () => {
  step.value += 1;
};

const handleLetter = (letter: Letter) => {
  // If letter is in word
  if (word.value.includes(letter)) {
    // If letter is not already rightLetters
    if (!rightLetters.value.includes(letter)) {
      rightLetters.value.push(letter);
    }
  } else {
    // If letter is not already wrongLetters
    if (!wrongLetters.value.includes(letter)) {
      wrongLetters.value.push(letter);
      increment();
    }
  }

  isWinner.value = word.value.every((letter) =>
    rightLetters.value.includes(letter)
  );
};

watch(step, (newStep) => {
  console.log("-> newStep", newStep);
  if (newStep >= 6) {
    word.value.forEach((letter) => {
      if (!rightLetters.value.includes(letter)) {
        rightLetters.value.push(letter);
      }
    });
  }
});

onMounted(() => init());
</script>

<template>
  <div>
    <HangmanBoy :step="step" />
    <Word :word="word" :rightLetters="rightLetters" />
    <Keyboard
      v-if="step < 6"
      :wrongLetters="wrongLetters"
      :rightLetters="rightLetters"
      @letter="handleLetter"
    />
    <div v-else>Game Over<button @click="init">Retry</button></div>
    <div v-if="isWinner">GG<button @click="init">Retry</button></div>
  </div>
</template>

<style scoped></style>
