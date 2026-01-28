# Crypto Price Tracker (Nuxt 4)

## Overview

This is a small Nuxt 4 application that fetches cryptocurrency market
data from the CoinGecko API and displays it in a table using **Nuxt
UI**.

The goal of the app is to demonstrate:

-   Structured API data fetching using **Vue Query**
-   Proper handling of **loading, error, and empty states**
-   Clean code organization and clear architectural decisions

------------------------------------------------------------------------

## Tech Stack

-   **Nuxt 4** -- Routing, SSR, and app structure\
-   **Vue 3** -- Composition API\
-   **@tanstack/vue-query** -- Server-state management and caching\
-   **Nuxt UI** -- Table and UI primitives\
-   **Axios** -- HTTP client

------------------------------------------------------------------------

## Why Vue Query?

Vue Query was chosen instead of manual `ref` / `watch`-based fetching
because:

-   It provides built-in loading, error, and empty state handling
-   Automatically handles caching, refetching, and stale data
-   Encourages a clean separation between server state and UI state
-   Scales well as the app grows (pagination, filters, background
    refetching)

This mirrors how data-heavy dashboards are handled in real production
applications.

------------------------------------------------------------------------

## Data Fetching Logic

### Composable: `useCryptoPricesAPI` and `useCryptoPricesAPIFunctions`



### Decision Explanation

-   `queryKey` enables caching and future invalidation
-   API logic is isolated in a composable for reusability
-   Axios is wrapped inside Vue Query to benefit from retries and
    refetching

------------------------------------------------------------------------

## UI Implementation (Nuxt UI Table)

``` vue
<script setup lang="ts">

import { useCryptoPricesAPI } from "~/composables/api/dashboard";

const { getCryptoPricesQuery } = useCryptoPricesAPI();
const queryArgs = computed(() => ({
  params: {
    vs_currency: "usd",
    order: "market_cap_desc",
    per_page: 10,
  },
}));


const columns = [
  { key: 'name', label: 'Coin' },
  { key: 'current_price', label: 'Price (USD)' },
  { key: 'market_cap', label: 'Market Cap' }
]
</script>

<template>
  <div>
    <h1 class="text-xl font-semibold mb-4">Crypto Price Tracker</h1>

    <div v-if="isLoading">Loading prices...</div>

    <div v-else-if="isError">
      Failed to load data: {{ error?.message }}
    </div>

    <div v-else-if="!data || data.length === 0">
      No crypto data available
    </div>

    <UTable
      v-else
      :columns="columns"
      :rows="data"
    />
  </div>
</template>
```

------------------------------------------------------------------------

## Handling Loading, Error, and Empty States

  State     How it's handled
  --------- -----------------------------------
  Loading   `isLoading` from Vue Query
  Error     `isError` + error message
  Empty     Explicit check for empty response
  Success   Rendered via `UTable`

### Decision Explanation

-   State flags come directly from Vue Query, avoiding manual state
    tracking
-   UI remains declarative and easy to reason about
-   Prevents edge cases like stale loaders or silent failures

------------------------------------------------------------------------

## Code Organization

    /composables
      useCryptoPrices.ts    # API + Vue Query logic
    /pages
      index.vue             # Page layout & table rendering

### Why this structure?

-   Keeps server-state logic out of components
-   Easy to extend (pagination, filters, auto-refetch)
-   Matches patterns used in large-scale Nuxt dashboards

------------------------------------------------------------------------

## Performance Considerations

-   Vue Query caches responses to avoid unnecessary API calls
-   Refetching can be configured (on focus, interval, manual)
-   Nuxt UI table efficiently renders tabular data
-   Structure supports easy addition of pagination or polling

------------------------------------------------------------------------

## Potential Improvements

-   Add pagination via API params + Vue Query query keys
-   Add search/filtering with debounced inputs
-   Auto-refresh prices using `refetchInterval`
-   Add dark/light mode using Nuxt UI theming

------------------------------------------------------------------------

## Key Takeaways

-   Vue Query simplifies server-state management and async handling
-   Nuxt UI tables speed up development while remaining customizable
-   Clean separation of concerns improves readability and scalability
-   Architecture mirrors real-world production dashboards



# Nuxt Starter Template

[![Nuxt UI](https://img.shields.io/badge/Made%20with-Nuxt%20UI-00DC82?logo=nuxt&labelColor=020420)](https://ui.nuxt.com)

Use this template to get started with [Nuxt UI](https://ui.nuxt.com) quickly.

- [Live demo](https://starter-template.nuxt.dev/)
- [Documentation](https://ui.nuxt.com/docs/getting-started/installation/nuxt)

<a href="https://starter-template.nuxt.dev/" target="_blank">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://ui.nuxt.com/assets/templates/nuxt/starter-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="https://ui.nuxt.com/assets/templates/nuxt/starter-light.png">
    <img alt="Nuxt Starter Template" src="https://ui.nuxt.com/assets/templates/nuxt/starter-light.png">
  </picture>
</a>

> The starter template for Vue is on https://github.com/nuxt-ui-templates/starter-vue.

## Quick Start

```bash [Terminal]
npm create nuxt@latest -- -t github:nuxt-ui-templates/starter
```

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-name=starter&repository-url=https%3A%2F%2Fgithub.com%2Fnuxt-ui-templates%2Fstarter&demo-image=https%3A%2F%2Fui.nuxt.com%2Fassets%2Ftemplates%2Fnuxt%2Fstarter-dark.png&demo-url=https%3A%2F%2Fstarter-template.nuxt.dev%2F&demo-title=Nuxt%20Starter%20Template&demo-description=A%20minimal%20template%20to%20get%20started%20with%20Nuxt%20UI.)

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
