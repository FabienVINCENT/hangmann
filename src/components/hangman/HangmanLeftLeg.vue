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
    <rect
      x="300"
      y="390"
      rx="10"
      ry="10"
      width="100"
      height="20"
      :fill="color"
      transform="rotate(-50, 390, 400)"
    />
  </svg>
</template>
