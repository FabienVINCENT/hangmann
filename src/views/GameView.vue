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
  isWinner.value = false;
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
  <div class="min-h-screen flex flex-col justify-between items-center wrapper">
    <HangmanBoy :step="step" />
    <Word :word="word" :rightLetters="rightLetters" />
    <Keyboard
      v-if="step < 6 && !isWinner"
      :wrongLetters="wrongLetters"
      :rightLetters="rightLetters"
      @letter="handleLetter"
    />
    <div v-else-if="!isWinner" class="p-4 w-full">
      <div class="card card-alert">
        <span>Game Over</span>
        <button class="btn-alert" @click="init">Retry</button>
      </div>
    </div>
    <div v-else-if="isWinner" class="p-4 w-full">
      <div class="card card-success">
        <span>Victory !</span>
        <button class="btn-success" @click="init">Retry</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  @apply flex-shrink-0 text-white border-0 py-2 px-8 focus:outline-none rounded text-lg mt-10 sm:mt-0;
}
.btn-alert {
  @apply bg-red-500 hover:bg-red-600;
}
.btn-success {
  @apply bg-green-500 hover:bg-green-600;
}
.wrapper > * {
  @apply m-4 basis-full max-w-md;
}
.card {
  @apply border w-full p-4 rounded-md flex flex-col justify-center items-center;
}
.card-alert {
  @apply bg-red-200 border-red-300;
}
.card-success {
  @apply bg-green-200 border-green-300;
}
</style>
