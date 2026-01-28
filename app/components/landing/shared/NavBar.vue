<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import { useRoute, useRouter } from "#app";
import PrimaryButton from "./PrimaryButton.vue";

/* ======================
   Props
====================== */
const props = defineProps<{
  tabs: { label: string; value: string }[];
}>();

/* ======================
   Router Sync
====================== */
const route = useRoute();
const router = useRouter();

const active = ref(
  Math.max(
    props.tabs.findIndex((t) => t.value === route.query.tab),
    0,
  ),
);

/* ======================
   DOM Refs
====================== */
const containerRef = ref<HTMLElement | null>(null);
const tabRefs = ref<HTMLElement[]>([]);

/* ======================
   Animated State
====================== */
const x = ref(0);
const w = ref(0);

/* ======================
   Targets
====================== */
let tx = 0;
let tw = 0;

const SPEED = 0.18;
const PADDING = 8;

/* ======================
   Init
====================== */
onMounted(async () => {
  await nextTick();

  const container = containerRef.value!;
  tabRefs.value = Array.from(container.querySelectorAll('[role="tab"]'));

  // Initial state = full-width liquid pill
  tw = container.clientWidth - PADDING * 2;
  w.value = tw;
  x.value = 0;

  animate();
});

/* ======================
   Animation Loop
====================== */
function animate() {
  x.value += (tx - x.value) * SPEED;
  w.value += (tw - w.value) * SPEED;
  requestAnimationFrame(animate);
}

/* ======================
   Hover
====================== */
function hoverTab(i: number) {
  const el = tabRefs.value[i];
  const container = containerRef.value;
  if (!el || !container) return;

  const tabRect = el.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  tx = tabRect.left - containerRect.left - PADDING;
  tw = tabRect.width;
}

/* ======================
   Leave
====================== */
function leaveTabs() {
  const container = containerRef.value;
  if (!container) return;

  tx = 0;
  tw = container.clientWidth - PADDING * 2;
}

/* ======================
   Select
====================== */
function selectTab(i: number) {
  active.value = i;

  router.replace({
    query: { ...route.query, tab: props.tabs[i]?.value },
  });

  hoverTab(i);
}
</script>
<template>
  <header class="fixed top-6 left-1/2 z-50 -translate-x-1/2 hidden sm:block">
    <nav
      class="flex items-center gap-8 rounded-full bg-neutral-800/80 backdrop-blur-xl px-6 py-2 text-neutral-200 shadow-lg"
      v-motion
      :initial="{ y: -20, opacity: 0 }"
      :enter="{ y: 0, opacity: 1 }"
      :transition="{ duration: 0.5 }"
    >
      <!-- Logo -->
      <div class="flex items-center gap-2 shrink-0">
        <div class="h-9 w-9 rounded-full bg-primary" />
        <span class="text-lg font-bold text-neutral-100"> Staco </span>
      </div>

      <!-- Tabs / Liquid container -->
      <div
        ref="containerRef"
        role="tablist"
        class="relative flex items-center h-16 gap-2 rounded-full p-2 overflow-hidden select-none w-160"
        @mouseleave="leaveTabs"
      >
        <!-- Outer shell -->
        <div
          class="absolute inset-0.75 rounded-full bg-linear-to-b from-neutral-800 to-neutral-900 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),inset_0_-1px_2px_rgba(255,255,255,0.05)]"
        />

        <!-- Liquid morph -->
        <div
          class="absolute top-2 left-2 h-12 rounded-full bg-linear-to-b from-neutral-700 to-neutral-800 shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)]"
          :style="{
            transform: `translateX(${x}px)`,
            width: w + 'px',
          }"
        />

        <!-- Tabs -->
        <button
          v-for="(tab, i) in props.tabs"
          :key="tab.value"
          role="tab"
          :aria-selected="active === i"
          class="relative z-10 px-5 py-2 text-sm font-medium rounded-full transition-colors duration-200 focus:outline-none"
          :class="
            active === i
              ? `text-black bg-linear-to-b from-[#E8E8E8] via-[#C0C0C0] to-[#A0A0A0]
                 shadow-[0_2px_8px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.5)]`
              : `text-neutral-400 hover:text-white`
          "
          @mouseenter="hoverTab(i)"
          @click="selectTab(i)"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Right actions -->
      <div class="flex items-center gap-4 shrink-0">
        <UButton
          variant="ghost"
          size="sm"
          class="hidden md:flex gap-2 text-neutral-200"
        >
          <UIcon name="i-heroicons-globe-alt" />
          EN
        </UButton>

        <UButton variant="ghost" size="sm" class="text-neutral-200">
          Sign in
        </UButton>

        <PrimaryButton />
      </div>
    </nav>
  </header>
</template>
