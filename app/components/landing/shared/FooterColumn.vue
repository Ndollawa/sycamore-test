<template>
  <div>
    <h4 class="mb-4 text-sm  md:text-base font-bold text-neutral-50">
      {{ title }}
    </h4>
    <ul class="space-y-3 text-sm md:text-base">
      <li
        v-for="link in links"
        :key="link"
        class="hover:text-neutral-50 cursor-pointer"
      >
        {{ link }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  links: Array
})
</script>
