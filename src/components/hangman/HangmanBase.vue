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
      x="10"
      y="480"
      rx="10"
      ry="10"
      width="190"
      height="20"
      :fill="color"
    />
    <rect x="100" y="0" rx="10" ry="10" width="20" height="500" :fill="color" />
    <rect x="100" y="0" rx="10" ry="10" width="300" height="20" :fill="color" />
    <rect
      x="100"
      y="120"
      rx="10"
      ry="10"
      width="200"
      height="20"
      :fill="color"
      transform="rotate(-45, 100,120)"
    />
    <rect x="380" y="0" rx="10" ry="10" width="20" height="120" :fill="color" />
  </svg>
</template>
