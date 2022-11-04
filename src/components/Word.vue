<script setup lang="ts">
import type { Letter } from "@/model/letter";

type Props = {
  word: Letter[];
  rightLetters: Letter[];
};

defineProps<Props>();
</script>

<template>
  <div class="flex gap-3 justify-center text-3xl uppercase font-bold my-5">
    <span
      v-for="(letter, index) in word"
      :key="letter + index"
      class="border-b-2 border-black"
    >
      <span :class="{ 'opacity-0': !rightLetters.includes(letter) }">{{
        letter
      }}</span>
    </span>
  </div>
</template>

<style scoped></style>
