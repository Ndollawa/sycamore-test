<script setup lang="ts">
import { h, resolveComponent } from "vue";
import type { TableColumn } from "@nuxt/ui";

import { useCryptoPricesAPI } from "~/composables/api/dashboard";

interface Crypto {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  price_change_percentage_24h: number;
}

const props = defineProps<{
  period: "1d" | "7d" | "30d";
  range: { start: Date; end: Date };
}>();

const UBadge = resolveComponent("UBadge");

// Fetch real crypto data

const { getCryptoPricesQuery } = useCryptoPricesAPI();
const queryArgs = computed(() => ({
  params: {
    vs_currency: "usd",
    order: "market_cap_desc",
    per_page: 10,
  },
}));

const { data, isLoading, isError, error } = getCryptoPricesQuery(queryArgs);
// Define table columns
const columns: TableColumn<Crypto>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => row.getValue("id"),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => row.getValue("name"),
  },
  {
    accessorKey: "symbol",
    header: "Symbol",
    cell: ({ row }) => row.getValue("symbol").toUpperCase(),
  },
  {
    accessorKey: "current_price",
    header: () => h("div", { class: "text-right" }, "Price"),
    cell: ({ row }) => {
      const price = Number(row.getValue("current_price"));
      return h(
        "div",
        { class: "text-right font-medium" },
        `$${price.toLocaleString()}`,
      );
    },
  },
  {
    accessorKey: "price_change_percentage_24h",
    header: "24h Change",
    cell: ({ row }) => {
      const change = Number(row.getValue("price_change_percentage_24h"));
      const color = change >= 0 ? "success" : "error";
      return h(
        UBadge,
        { class: "capitalize", variant: "subtle", color },
        () => `${change.toFixed(2)}%`,
      );
    },
  },
  {
    accessorKey: "market_cap",
    header: () => h("div", { class: "text-right" }, "Market Cap"),
    cell: ({ row }) => {
      const cap = Number(row.getValue("market_cap"));
      return h(
        "div",
        { class: "text-right font-medium" },
        `$${cap.toLocaleString()}`,
      );
    },
  },
];
</script>

<template>
  <div class="">
    <h1 class="text-xl font-semibold mb-4">Crypto Price Tracker</h1>

 <!-- Skeleton Loading -->
 <UTable
    v-if="(isLoading || data.length) && !isError"
      :loading="isLoading"
      :data="data"
      :columns="columns"
      class="shrink-0"
      :ui="{
        base: 'table-fixed border-separate border-spacing-0',
        thead: '[&>tr]:bg-elevated/50 [&>tr]:after:content-none',
        tbody: '[&>tr]:last:[&>td]:border-b-0',
        th: 'first:rounded-l-lg last:rounded-r-lg border-y border-default first:border-l last:border-r',
        td: 'border-b border-default',
      }"
    />
    <div v-if="isError">Failed to load data: {{ error?.message }}</div>

  </div>
</template>
