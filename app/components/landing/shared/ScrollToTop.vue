<template>
  <Transition name="fade">
    <button
      v-if="visible"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-white shadow-lg flex items-center justify-center"
    >
      <!-- Progress ring -->
      <svg
        class="absolute inset-0 h-full w-full -rotate-90"
        viewBox="0 0 100 100"
      >
        <!-- Background circle -->
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#E5E7EB"
          stroke-width="6"
        />
        <!-- Progress circle -->
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#22C55E"
          stroke-width="6"
          stroke-linecap="round"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="dashOffset"
        />
      </svg>

      <!-- Arrow icon -->

      <ClientOnly>
        <UIcon
          name="i-heroicons-arrow-up"
          class="relative h-5 w-5 text-primary"
        />
      </ClientOnly>
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

const visible = ref(false);
const progress = ref(0);

const radius = 45;
const circumference = 2 * Math.PI * radius;

const dashOffset = computed(() => circumference * (1 - progress.value));

const updateScroll = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  progress.value = Math.min(scrollTop / docHeight, 1);
  visible.value = scrollTop > 200;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  updateScroll();
  window.addEventListener("scroll", updateScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateScroll);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
