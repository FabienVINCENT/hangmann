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
      x="380"
      y="260"
      rx="10"
      ry="10"
      width="20"
      height="150"
      :fill="color"
    />
  </svg>
</template>

<style scoped></style>
