<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const words = [
  { text: 'Easier', color: 'text-primary-500' },
  { text: 'Accountable', color: 'text-primary-500' },
  { text: 'Unbeatable', color: 'text-primary-500' },
]

const DURATION = 3000 // ms per word
const TICK = 50       // update granularity

const index = ref(0)
const startTime = ref(0)
const now = ref(0)

let raf: number
let interval: any

const elapsed = computed(() => now.value - startTime.value)

const progress = computed(() => {
  const ratio = elapsed.value / DURATION
  return Math.min(100, Math.max(0, ratio * 100))
})

onMounted(() => {
  startTime.value = Date.now()
  now.value = startTime.value

  interval = setInterval(() => {
    now.value = Date.now()

    if (elapsed.value >= DURATION) {
      index.value = (index.value + 1) % words.length
      startTime.value = Date.now()
    }
  }, TICK)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <div class="space-y-4">
    <h1 class="text-4xl text-wrap md:text-5xl xl:text-6xl font-bold w-xl text-neutral-100 leading-12 md:leading-16 xl:leading-20 mt-5">
     Financial Security
      <br/>Made

      <span
        :key="words[index]?.text"
        class="relative inline-block transition-all duration-300"
        :class="words[index]?.color"
      >
       <span class=" "> {{ words[index]?.text }}
         <!-- Countdown Progress -->
</span>
     <UProgress
      v-model="progress"
      size="md"
      class="max-w-xs mx-auto absolute"
    />
      </span>
    </h1>


  </div>
</template>
