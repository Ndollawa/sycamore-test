<template>
  <UButton
    class="group relative h-10 md:h-12 overflow-hidden rounded-full px-4 md:px-8 text-sm md:text-base font-bold"
  >
    <span
      class="relative block h-full transition-transform group-hover:-translate-y-full duration-300 ease-in-out"
    >
      <span class="flex h-full items-center justify-center">
        {{ props.label }}
      </span>
      <span class="flex h-full items-center justify-center">
        {{ props.hoverLabel }}
      </span>
    </span>
  </UButton>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: "Get Started For Free",
  },
  hoverLabel: {
    type: String,
    default: "Get Started For Free",
  },
});
</script>

<style scoped></style>
