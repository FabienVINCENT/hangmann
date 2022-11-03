<script setup lang="ts">
type Props = {
  x: number;
  y: number;
  color?: string;
};

withDefaults(defineProps<Props>(), { color: "black" });
</script>

<template>
  <svg :viewBox="`0 0 ${x} ${y}`">
    <circle
      cx="390"
      cy="190"
      r="70"
      :stroke="color"
      stroke-width="20"
      fill="transparent"
    />
  </svg>
</template>

<style scoped></style>
