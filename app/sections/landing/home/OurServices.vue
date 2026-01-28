<script setup lang="ts">
const cards = ref([
  {
    title: "Used advanced technologies",
    description:
      "I must explain to you how all this mistaken. Idea of main denouncing pleasure and praising pain was born.",
    icon: "data:image/svg+xml,%3csvg%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M38.75%2039.5752H34.125C33.1%2039.5752%2032.25%2038.7252%2032.25%2037.7002C32.25%2036.6752%2033.1%2035.8252%2034.125%2035.8252H38.75C39.775%2035.8252%2040.625%2036.6752%2040.625%2037.7002C40.625%2038.7252%2039.775%2039.5752%2038.75%2039.5752Z'%20fill='%23004D42'/%3e%3cpath%20d='M27.425%2039.5752H11.25C10.225%2039.5752%209.375%2038.7252%209.375%2037.7002C9.375%2036.6752%2010.225%2035.8252%2011.25%2035.8252H27.425C28.45%2035.8252%2029.3%2036.6752%2029.3%2037.7002C29.3%2038.7252%2028.475%2039.5752%2027.425%2039.5752Z'%20fill='%23004D42'/%3e%3cpath%20d='M38.7508%2030.175H24.9258C23.9008%2030.175%2023.0508%2029.325%2023.0508%2028.3C23.0508%2027.275%2023.9008%2026.425%2024.9258%2026.425H38.7508C39.7758%2026.425%2040.6258%2027.275%2040.6258%2028.3C40.6258%2029.325%2039.7758%2030.175%2038.7508%2030.175Z'%20fill='%23004D42'/%3e%3cpath%20d='M18.175%2030.175H11.25C10.225%2030.175%209.375%2029.325%209.375%2028.3C9.375%2027.275%2010.225%2026.425%2011.25%2026.425H18.175C19.2%2026.425%2020.05%2027.275%2020.05%2028.3C20.05%2029.325%2019.2%2030.175%2018.175%2030.175Z'%20fill='%23004D42'/%3e%3cpath%20opacity='0.4'%20d='M35.475%200H14.525C5.425%200%200%205.425%200%2014.525V35.45C0%2044.575%205.425%2050%2014.525%2050H35.45C44.55%2050%2049.975%2044.575%2049.975%2035.475V14.525C50%205.425%2044.575%200%2035.475%200Z'%20fill='%23004D42'/%3e%3c/svg%3e",
    class: "rounded-2xl ",
    variant: "subtle",
    to: "/docs/getting-started/integrations/icons",
  },
  {
    title: "Clean design & Typography",
    description:
      "I must explain to you how all this mistaken. Idea of main denouncing pleasure and praising pain was born.",
    icon: "data:image/svg+xml,%3csvg%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20opacity='0.4'%20d='M50%2025C50%2037.6%2040.6499%2048.025%2028.5249%2049.75C27.3749%2049.925%2026.2%2050%2025%2050C18.1%2050%2011.85%2047.2%207.32498%2042.675C2.79998%2038.15%200%2031.9%200%2025C0%2011.2%2011.2%200%2025%200C31.9%200%2038.15%202.8%2042.675%207.325C47.2%2011.85%2050%2018.1%2050%2025Z'%20fill='%2344C486'/%3e%3cpath%20d='M32.0759%2020.5748L25.8758%2026.7748L42.2008%2043.0998C41.3008%2043.9748%2040.3258%2044.7748%2039.3008%2045.4998L23.2258%2029.4248L17.0508%2035.5998L29.8508%2048.4248C30.1258%2048.6998%2030.3009%2049.0498%2030.3759%2049.3998C30.3759%2049.3998%2030.3759%2049.3998%2030.3759%2049.4248C29.7759%2049.5498%2029.1508%2049.6748%2028.5258%2049.7498C27.7258%2049.8748%2026.9258%2049.9498%2026.1008%2049.9748L14.4008%2038.2498L8.70078%2043.9498C8.22578%2043.5498%207.77581%2043.1248%207.32581%2042.6748C6.87581%2042.2248%206.45078%2041.7748%206.05078%2041.2998L41.3009%206.0498C41.7759%206.4498%2042.2258%206.8748%2042.6758%207.3248C43.1258%207.7748%2043.5509%208.2248%2043.9509%208.6998L34.7259%2017.9248L48.9509%2032.1498C48.5509%2033.4748%2048.0508%2034.7248%2047.4508%2035.9498L32.0759%2020.5748Z'%20fill='%2344C486'/%3e%3c/svg%3e",
    class: "rounded-2xl ",
    variant: "subtle",
    to: "/docs/getting-started/integrations/fonts",
  },
  {
    title: "Best customer support",
    description:
      "I must explain to you how all this mistaken. Idea of main denouncing pleasure and praising pain was born.",
    icon: "data:image/svg+xml,%3csvg%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20opacity='0.4'%20d='M50%2012.5V37.5C50%2045%2045.8333%2050%2036.1111%2050H13.8889C4.16667%2050%200%2045%200%2037.5V12.5C0%205%204.16667%200%2013.8889%200H36.1111C45.8333%200%2050%205%2050%2012.5Z'%20fill='%23433968'/%3e%3cpath%20d='M34.7218%200V18.7909C34.7218%2019.8428%2033.2773%2020.3688%2032.3884%2019.6755L25.9441%2014.5594C25.4163%2014.129%2024.5828%2014.129%2024.055%2014.5594L17.6108%2019.6755C16.7219%2020.3927%2015.2773%2019.8428%2015.2773%2018.7909V0H34.7218Z'%20fill='%23433968'/%3e%3cpath%20d='M40.2795%2030.875H28.474C27.3351%2030.875%2026.3906%2030.025%2026.3906%2029C26.3906%2027.975%2027.3351%2027.125%2028.474%2027.125H40.2795C41.4184%2027.125%2042.3628%2027.975%2042.3628%2029C42.3628%2030.025%2041.4184%2030.875%2040.2795%2030.875Z'%20fill='%23433968'/%3e%3cpath%20d='M40.2765%2040.875H16.6654C15.5265%2040.875%2014.582%2040.025%2014.582%2039C14.582%2037.975%2015.5265%2037.125%2016.6654%2037.125H40.2765C41.4154%2037.125%2042.3598%2037.975%2042.3598%2039C42.3598%2040.025%2041.4154%2040.875%2040.2765%2040.875Z'%20fill='%23433968'/%3e%3c/svg%3e",
    class: "rounded-2xl ",
    variant: "subtle",
    to: "/docs/getting-started/integrations/color-mode",
  },
]);
</script>

<template>
  <UPageSection class="container mx-auto" v-motion-visible="sectionMotion">
    <UPageGrid
        v-motion
        v-motion-visible="{ once: false }"
        :initial="{ opacity: 0, y: 40 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            stiffness: 70,
            delay: 0.15,
          },
        }">
      <UCard
        v-for="(card, index) in cards"
        :key="index"
        v-bind="card"
        :ui="{
          header: 'border-0 pt-5',
          footer: 'border-0',
          body: 'border-0',
        }"
      >
        <template #header>
          <NuxtImg :src="card.icon" alt="icon" class="size-12" />
        </template>
        <p class="text-[15px] text-pretty text-muted mt-1">
          {{ card.description }}
        </p>
        <template #footer>
          <div class="group flex justify-between items-center">
            <span
              class="group-hover:text-primary transition-all duration-300 font-extrabold"
              >Learn More</span
            >
            <span
              class="group-hover:bg-primary group-hover:-rotate-45 group-hover:text-neutral-50 text-gray-900 bg-neutral-200 rounded-full size-9 p-2 flex items-center justify-center transition-all duration-300"
              ><UIcon name="i-lucide-arrow-right" class="size-7"
            /></span>
          </div>
        </template>
      </UCard>
    </UPageGrid>
  </UPageSection>
</template>
