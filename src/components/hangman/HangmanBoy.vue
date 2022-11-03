<script setup lang="ts">
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

withDefaults(defineProps<Props>(), { step: 0 });
</script>

<template>
  <div class="border m-2">
    <div class="relative">
      <HangmanBase :x="500" :y="500" />
      <HangmanHead v-if="step >= 1" class="absolute top-0" :x="500" :y="500" />
      <HangmanBody v-if="step >= 2" class="absolute top-0" :x="500" :y="500" />
      <HangmanLeftArm
        v-if="step >= 3"
        class="absolute top-0"
        :x="500"
        :y="500"
      />
      <HangmanRightArm
        v-if="step >= 4"
        class="absolute top-0"
        :x="500"
        :y="500"
      />
      <HangmanLeftLeg
        v-if="step >= 5"
        class="absolute top-0"
        :x="500"
        :y="500"
      />
      <HangmanRightLeg
        v-if="step >= 6"
        class="absolute top-0"
        :x="500"
        :y="500"
      />
    </div>
  </div>
</template>

<style scoped></style>
