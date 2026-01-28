<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";
import { HeroHeading, FloatingImages } from "~/components/landing/home/";
import { PrimaryButton } from "~/components/landing/shared/";

const links = ref<ButtonProps[]>([
  {
    label: "Get Start for Free",
    to: "#",
    size: "lg",
    class: "rounded-full",
    // icon: 'i-lucide-square-play'
  },
  {
    label: "Let’s talk",
    to: "#",
    color: "neutral",
    variant: "ghost",
    size: "lg",
    trailingIcon: "i-lucide-chevron-right",
    class: "rounded-full hover:bg-transparent",
    ui: {
      trailingIcon: "rounded-full text-neutral-50 bg-neutral-300/50 size-6",
    },
  },
]);
</script>

<template>
  <UPageHero
    description="Staco is the dedicated platform for human management that helps to grow your startup business quickly."
    class="pt-20 bg-neutral-900"
    orientation="horizontal"
    :links="links"
    :ui="{
      description: 'text-neutral-100 pt-2 pb-5 md:pt-5 md:pb-9',
    }"
    v-motion
    :initial="{ opacity: 0, y: 80, scale: 0.98 }"
    :enter="{ opacity: 1, y: 0, scale: 1 }"
    :transition="{ duration: 0.9, ease: 'easeOut' }"
  >
    <template #title>
      <HeroHeading
        v-motion
        v-motion-visible="{ once: false }"
        :initial="{ opacity: 0, x: -150 }"
        :visible="{
          opacity: 1,
          x: 0,
          transition: { type: 'spring', stiffness: 70 },
        }"
      />
    </template>
    <template #body>
      <FloatingImages />
    </template>
    <template #links>
      <PrimaryButton />
      <UButton
        variant="ghost"
        class="hover:bg-transparent text-neutral-100 text-sm md:text-base font-bold"
        v-motion
        v-motion-visible="{ once: false }"
        :initial="{ opacity: 0, y: 40 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: { type: 'spring', stiffness: 70 },
        }"
      >
        Let’s talk
        <template #trailing>
          <div
            class="flex h-full rounded-full size-9 bg-neutral-500/50 items-center justify-center"
            v-motion
            v-motion-visible="{ once: false }"
            :initial="{ opacity: 0, y: 40 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: { type: 'spring', stiffness: 70 },
            }"
          >
            <UIcon name="i-lucide-chevron-right" />
          </div>
        </template>
      </UButton>
    </template>
    <div
      class="relative"
      v-motion
      v-motion-visible="{ once: false }"
      :initial="{ opacity: 0, x: 150 }"
      :visible="{
        opacity: 1,
        x: 0,
        transition: { type: 'spring', stiffness: 70 },
      }"
    >
      <video id="" loop="" autoplay="" playsinline="" class="rounded-4xl">
        <source
          src="https://staco-react.vercel.app/assets/h6-video-DaLtBHE1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <UButton
        size="xl"
        icon="lucide:play"
        color="success"
        class="absolute rounded-full bg-green-100 text-primary hover:text-neutral-100 right-10 bottom-10"
      ></UButton>
    </div>
  </UPageHero>
</template>
