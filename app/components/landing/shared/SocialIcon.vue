<template>
  <UButton
    variant="ghost"
    class="h-10 w-10 group relative overflow-hidden rounded-full border border-neutral-600 text-neutral-300 hover:text-neutral-50 hover:border-neutral-400 hover:bg-neutral-600 flex items-center justify-center"
  ><span
    class="relative block h-full transition-transform duration-300 ease-in-out
 group-hover:-translate-y-full"
  >
  <ClientOnly>
    <UIcon :name="name"  class="flex h-full items-center justify-center"/>
    <UIcon :name="name" class="flex h-full items-center justify-center" />
  </ClientOnly>
  </span>
  </UButton>
</template>

<script setup>
defineProps({
  name: String
})
</script>
