<script setup lang="ts">
import type { Letter } from "@/model/letter";

type Props = {
  wrongLetters: Letter[];
  rightLetters: Letter[];
};

defineProps<Props>();

const alphabet: Letter[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

defineEmits<{ (e: "letter", value: Letter): void }>();
</script>

<template>
  <div class="flex gap-2 flex-wrap">
    <button
      v-for="letter in alphabet"
      :key="letter"
      class="border px-3 py-2 min-w-[3rem] uppercase font-bold"
      :class="[
        { disabled: wrongLetters.includes(letter) },
        { active: rightLetters.includes(letter) },
      ]"
      @click="$emit('letter', letter)"
      :disabled="wrongLetters.includes(letter)"
    >
      {{ letter }}
    </button>
  </div>
</template>

<style scoped>
button:focus:not(.active),
button:hover:not(.active) {
  @apply bg-red-500;
}

button.active {
  @apply bg-blue-300;
}
button.disabled {
  @apply opacity-25;
}
</style>
