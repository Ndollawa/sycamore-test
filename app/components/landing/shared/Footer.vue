<template>
  <div class="bg-neutral-50 py-10 px-2 md:py-20 lg:px-10" v-if="isClient" v-motion v-motion-visible="sectionMotion">
      <div
        class="rounded-3xl bg-neutral-900 text-neutral-300 px-3 py-7 lg:px-10 md:py-14"
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
                    }"
      >
    <UContainer>
        <!-- Top content -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <!-- Brand -->
          <div class="w-full lg:col-span-3">
            <div class="flex items-center gap-4">
              <div
                class="h-10 w-10 rounded-full bg-primary"
              />
              <span class="text-2xl font-bold text-neutral-100">
                Staco
              </span>
            </div>

            <p class="mt-6 max-w-lg text-sm md:text-base leading-relaxed">
              Staco is the dedicated platform for performance
              management that helps to grow your startup quickly
            </p>

            <!-- Social icons -->
            <div class="mt-6 flex gap-3">
              <SocialIcon name="i-simple-icons-facebook" />
              <SocialIcon name="i-simple-icons-x" />
              <SocialIcon name="i-simple-icons-linkedin" />
              <SocialIcon name="i-simple-icons-instagram" />
              <SocialIcon name="i-simple-icons-youtube" />
            </div>
          </div>

          <!-- Columns -->
           <div class="grid grid-cols-2 md:grid-cols-4 gap-8 lg:col-span-8">
          <FooterColumn title="Products 🔥" :links="products"  />
          <FooterColumn title="Why Choose ✨" :links="whyChoose"  />
          <FooterColumn title="Resources 📦" :links="resources"  />
          <FooterColumn title="Company 💎" :links="company"  />
        </div>
      </div>

        <!-- Divider -->
        <div class="my-10 h-px bg-neutral-700/60" />

        <!-- Bottom bar -->
        <div
          class="flex flex-col gap-4 text-sm md:text-base text-center md:text-left  md:flex-row md:items-center md:justify-between text-neutral-50"
        >
          <span>© 2023 Staco. All rights reserved.</span>

          <div class="flex gap-6 justify-center md:justify-start flex-wrap">
            <a href="#" class="hover:text-white">Terms and conditions</a>
            <a href="#" class="hover:text-white">Cookies</a>
            <a href="#" class="hover:text-white">Privacy policy</a>
          </div>
        </div>
    </UContainer>
      </div>
  </div>
</template>

<script setup>
import FooterColumn from './FooterColumn.vue';
import SocialIcon from './SocialIcon.vue';
const isClient = import.meta.client


const products = [
  'HR Management',
  'Invoice System',
  'Email Marketing',
  'Web Services',
  'Digital Marketing'
]

const whyChoose = [
  'Customers',
  'Why Staco?',
  'Book a demo'
]

const resources = [
  'Latest Blog',
  'Supports',
  'Knowledgebase',
  'FAQs'
]

const company = [
  'About',
  'What we do',
  'Contact us',
  'Careers'
]
</script>
