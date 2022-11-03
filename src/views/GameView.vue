<script setup lang="ts">
import HangmanBoy from "@/components/hangman/HangmanBoy.vue";

import { ref } from "vue";

const step = ref(0);

const increment = () => {
  step.value += 1;
};
</script>

<template>
  <div>
    <HangmanBoy :step="step" />
    <button @click="increment">Step {{ step }}</button>
    <button @click="step = 0">reset</button>
  </div>
</template>

<style scoped></style>
