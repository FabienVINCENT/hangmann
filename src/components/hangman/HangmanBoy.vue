<script setup lang="ts">
import { ref } from "vue";
import HangmanBase from "./HangmanBase.vue";
import HangmanHead from "./HangmanHead.vue";
import HangmanBody from "./HangmanBody.vue";
import HangmanLeftArm from "./HangmanLeftArm.vue";
import HangmanRightArm from "./HangmanRightArm.vue";
import HangmanLeftLeg from "./HangmanLeftLeg.vue";
import HangmanRightLeg from "./HangmanRightLeg.vue";

type Props = {
  step?: number;
};

const sizeX = ref(500);
const sizeY = ref(500);

withDefaults(defineProps<Props>(), { step: 0 });
</script>

<template>
  <div class="relative flex justify-center wrapper">
    <HangmanBase :x="sizeX" :y="sizeY" />
    <HangmanHead
      v-if="step >= 1"
      class="absolute top-0"
      :x="sizeX"
      :y="sizeY"
    />
    <HangmanBody
      v-if="step >= 2"
      class="absolute top-0"
      :x="sizeX"
      :y="sizeY"
    />
    <HangmanLeftArm
      v-if="step >= 3"
      class="absolute top-0"
      :x="sizeX"
      :y="sizeY"
    />
    <HangmanRightArm
      v-if="step >= 4"
      class="absolute top-0"
      :x="sizeX"
      :y="sizeY"
    />
    <HangmanLeftLeg
      v-if="step >= 5"
      class="absolute top-0"
      :x="sizeX"
      :y="sizeY"
    />
    <HangmanRightLeg
      v-if="step >= 6"
      class="absolute top-0"
      :x="sizeX"
      :y="sizeY"
    />
  </div>
</template>

<style scoped>
.wrapper > * {
  @apply w-full;
}
</style>
