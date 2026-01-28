export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const {
    vs_currency = "usd",
    order = "market_cap_desc",
    per_page = 10,
  } = query;

  return await $fetch("https://api.coingecko.com/api/v3/coins/markets", {
    params: {
      vs_currency,
      order,
      per_page,
    },
  });
});
