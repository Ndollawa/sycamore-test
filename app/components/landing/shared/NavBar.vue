<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import { useRoute, useRouter } from "#app";
import PrimaryButton from "./PrimaryButton.vue";
import type { NavigationMenuItem } from "@nuxt/ui";
import { useScroll, useBreakpoints } from "@vueuse/core";
import {cn} from "~/utils";

const isClient = import.meta.client;

const { y } = useScroll(window);
const breakpoints = useBreakpoints({ md: 768 });

const isMobile = breakpoints.smaller("md");
const isAtTop = computed(() => y.value < 20);

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: "Links",
      type: "label",
    },
    {
      label: "Guide",
      icon: "i-lucide-book-open",
      children: [
        {
          label: "Introduction",
          description: "Fully styled and customizable components for Nuxt.",
          icon: "i-lucide-house",
        },
        {
          label: "Installation",
          description:
            "Learn how to install and configure Nuxt UI in your application.",
          icon: "i-lucide-cloud-download",
        },
        {
          label: "Icons",
          icon: "i-lucide-smile",
          description:
            "You have nothing to do, @nuxt/icon will handle it automatically.",
        },
        {
          label: "Colors",
          icon: "i-lucide-swatch-book",
          description:
            "Choose a primary and a neutral color from your Tailwind CSS theme.",
        },
        {
          label: "Theme",
          icon: "i-lucide-cog",
          description:
            "You can customize components by using the `class` / `ui` props or in your app.config.ts.",
        },
      ],
    },
    {
      label: "Composables",
      icon: "i-lucide-database",
      children: [
        {
          label: "defineShortcuts",
          icon: "i-lucide-file-text",
          description: "Define shortcuts for your application.",
          to: "/docs/composables/define-shortcuts",
        },
        {
          label: "useOverlay",
          icon: "i-lucide-file-text",
          description: "Display a modal/slideover within your application.",
          to: "/docs/composables/use-overlay",
        },
        {
          label: "useToast",
          icon: "i-lucide-file-text",
          description: "Display a toast within your application.",
          to: "/docs/composables/use-toast",
        },
      ],
    },
    {
      label: "Components",
      icon: "i-lucide-box",
      to: "/docs/components",
      active: true,
      defaultOpen: true,
      children: [
        {
          label: "Link",
          icon: "i-lucide-file-text",
          description: "Use NuxtLink with superpowers.",
          to: "/docs/components/link",
        },
        {
          label: "Modal",
          icon: "i-lucide-file-text",
          description: "Display a modal within your application.",
          to: "/docs/components/modal",
        },
        {
          label: "NavigationMenu",
          icon: "i-lucide-file-text",
          description: "Display a list of links.",
          to: "/docs/components/navigation-menu",
        },
        {
          label: "Pagination",
          icon: "i-lucide-file-text",
          description: "Display a list of pages.",
          to: "/docs/components/pagination",
        },
        {
          label: "Popover",
          icon: "i-lucide-file-text",
          description:
            "Display a non-modal dialog that floats around a trigger element.",
          to: "/docs/components/popover",
        },
        {
          label: "Progress",
          icon: "i-lucide-file-text",
          description: "Show a horizontal bar to indicate task progression.",
          to: "/docs/components/progress",
        },
      ],
    },
  ],
  [
    {
      label: "GitHub",
      icon: "i-simple-icons-github",
      badge: "6k",
      to: "https://github.com/nuxt/ui",
      target: "_blank",
    },
    {
      label: "Help",
      icon: "i-lucide-circle-help",
      disabled: true,
    },
  ],
]);

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
  <header
    :class="
      cn(
        {
          'fixed top-6 left-1/2 z-50 -translate-x-1/2 hidden xl:block transition-all duration-100':
            isAtTop && !isMobile,
        },
        { 'w-full sticky h-16 left-0 right-0 top-0 z-99999': !isAtTop },
      )
    "
  >
    <nav
      v-if="isClient"
      :class="
        cn('flex items-center justify-between gap-8 px-6 py-2 shadow-lg',
          {
            'rounded-full bg-neutral-800/80 backdrop-blur-xl text-neutral-200':
              isAtTop && !isMobile,
          },
          { 'bg-neutral-200': !isAtTop },
        )
      "
      v-motion
      v-motion-visible="{ once: false }"
      :initial="{ opacity: 0, y: -40 }"
      :visible="{
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 70,
          delay: 0.15,
        },
      }"
    >
      <!-- Logo -->
      <div class="flex items-center gap-2 shrink-0">
        <div class="h-9 w-9 rounded-full bg-primary" />
        <span :class="cn('text-lg font-bold text-neutral-900',{'text-neutral-100': isAtTop && !isMobile})"> Staco </span>
      </div>

      <!-- Tabs / Liquid container -->
      <div
        v-if="isAtTop && !isMobile"
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
    <!-- <UNavigationMenu orientation="horizontal" :items="items" class="data-[orientation=vertical]:w-48" v-if="!isAtTop" /> -->
      <!-- Right actions -->
      <div class="hidden items-center gap-4 shrink-0 lg:flex">
        <UButton
          variant="ghost"
          size="sm"
          class="hidden xl:flex gap-2 text-neutral-200"
        >
          <UIcon name="i-heroicons-globe-alt" />
          EN
        </UButton>

        <UButton
          variant="ghost"
          size="sm"
          class="text-neutral-200 hidden xl:block"
        >
          Sign in
        </UButton>

        <PrimaryButton />

      </div>
      <UButton
          size="md"
          icon="lucide:menu"
          color="success"
          class="md:hidden"
        ></UButton>
    </nav>
  </header>
</template>
