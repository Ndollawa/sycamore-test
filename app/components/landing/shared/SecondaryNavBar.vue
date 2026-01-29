<template>
  <nav class="relative">
  <div class="flex items-center justify-between">
    <!-- Main Nav -->
    <ul class="flex items-center gap-8">
      <!-- Home / Mega Menu -->
      <li class="relative group">
        <a
          href="/finance"
          class="font-semibold text-primary"
        >
          Home
        </a>

        <!-- Mega Menu -->
        <div
          class="absolute left-0 top-full z-50 hidden w-[1100px] rounded-xl bg-white p-8 shadow-xl group-hover:block"
        >
          <div class="grid grid-cols-4 gap-6">
            <!-- Column 1 -->
            <ul class="space-y-3">
              <li><a href="/" class="hover:text-primary">Main Demo</a></li>
              <li><a href="/customer-service" class="hover:text-primary">Customer Service</a></li>
              <li><a href="/team-collaboration" class="hover:text-primary">Team Collaboration</a></li>
              <li><a href="/sass-landing" class="hover:text-primary">SaaS Landing One</a></li>
              <li class="flex items-center gap-2">
                <a href="/sass-landing-two" class="hover:text-primary">SaaS Landing Two</a>
                <span class="rounded bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-600">New</span>
              </li>
              <li><a href="/app-landing" class="hover:text-primary">App Landing</a></li>
              <li><a href="/corporate" class="hover:text-primary">Corporate</a></li>
            </ul>

            <!-- Column 2 -->
            <ul class="space-y-3">
              <li class="flex items-center gap-2">
                <a href="/crypto-wallet-one" class="hover:text-primary">Crypto Wallet One</a>
                <span class="rounded bg-red-100 px-2 py-0.5 text-xs text-red-600">Hot</span>
              </li>
              <li class="flex items-center gap-2">
                <a href="/crypto-wallet-two" class="hover:text-primary">Crypto Wallet Two</a>
                <span class="rounded bg-purple-100 px-2 py-0.5 text-xs text-purple-600">Trendy</span>
              </li>
              <li><a href="/crypto-token" class="hover:text-primary">Crypto Token</a></li>
              <li class="flex items-center gap-2">
                <a href="/defi-landing" class="hover:text-primary">DeFi Landing</a>
                <span class="rounded bg-red-100 px-2 py-0.5 text-xs text-red-600">Hot</span>
              </li>
              <li><a href="/newsletter" class="hover:text-primary">Newsletter</a></li>
              <li><a href="/chatbot" class="hover:text-primary">Chatbot</a></li>
              <li><a href="/business" class="hover:text-primary">Business</a></li>
            </ul>

            <!-- Column 3 -->
            <div class="space-y-4">
              <ul class="space-y-3">
                <li class="flex items-center gap-2 font-semibold text-primary">
                  <a href="/finance">Finance</a>
                  <span class="rounded bg-purple-100 px-2 py-0.5 text-xs text-purple-600">Trendy</span>
                </li>
                <li><a href="/accounting" class="hover:text-primary">Accounting</a></li>
                <li><a href="/portfolio" class="hover:text-primary">Portfolio</a></li>
              </ul>

              <div class="rounded-lg bg-neutral-900 p-4 text-white">
                <p class="font-semibold">More Demo</p>
                <p class="text-sm text-neutral-400">Coming soon...</p>
              </div>
            </div>

            <!-- Column 4 (Preview) -->
            <div>
              <h5 class="mb-4 font-bold">
                37 HTML Pages with trendy design
              </h5>
              <div class="overflow-hidden rounded-lg">
                <img
                  src="https://staco-react.vercel.app/assets/finance-min-B1o2MCjr.png"
                  alt=""
                  class="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </li>

      <!-- Pages -->
      <li class="relative group">
        <a href="/finance" class="font-medium">Pages</a>

        <ul
          class="absolute top-full hidden w-56 rounded-lg bg-white py-3 shadow-lg group-hover:block"
        >
          <li><a class="block px-4 py-2 hover:bg-neutral-100" href="/about-us">About Us</a></li>
          <li><a class="block px-4 py-2 hover:bg-neutral-100" href="/our-services">Our Services</a></li>
          <li><a class="block px-4 py-2 hover:bg-neutral-100" href="/pricing-plan">Pricing Plan</a></li>

          <!-- Nested submenu -->
          <li class="relative group">
            <a class="block px-4 py-2 font-semibold hover:bg-neutral-100" href="/finance">
              Auth & Utility
            </a>

            <ul
              class="absolute left-full top-0 hidden w-52 rounded-lg bg-white py-2 shadow-lg group-hover:block"
            >
              <li><a class="block px-4 py-2 hover:bg-neutral-100" href="/sign-in">Login</a></li>
              <li><a class="block px-4 py-2 hover:bg-neutral-100" href="/sign-up">Sign Up</a></li>
              <li><a class="block px-4 py-2 hover:bg-neutral-100" href="/forgot-password">Reset Password</a></li>
              <li><a class="block px-4 py-2 hover:bg-neutral-100" href="/terms">Terms</a></li>
              <li><a class="block px-4 py-2 hover:bg-neutral-100" href="/privacy-policy">Privacy</a></li>
            </ul>
          </li>

          <li><a class="block px-4 py-2 hover:bg-neutral-100" href="/blog">Latest Blog</a></li>
          <li><a class="block px-4 py-2 hover:bg-neutral-100" href="/contact-us">Contact Us</a></li>
        </ul>
      </li>

      <li><a href="/our-services">Services</a></li>
      <li><a href="/blog">Blogs</a></li>
      <li><a href="/contact-us">Contact Us</a></li>
    </ul>

    <!-- Right Actions -->
    <ul class="flex items-center gap-4">
      <li><a href="/sign-in" class="font-medium">Sign in</a></li>
      <li>
        <a
          href="/sign-up"
          class="rounded-full bg-primary px-6 py-2 font-semibold text-white hover:bg-primary/90"
        >
          Start free
        </a>
      </li>
    </ul>
  </div>
</nav>

</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
