export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function randomFrom<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]!
}


export function omit<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[],
): Omit<T, K> {
  const clone = { ...obj };
  for (const key of keys) {
    delete clone[key];
  }
  return clone;
}

export const formatQueryArgs = (queryArgs: Ref<Record<string, any>>) => {
  const rawPage = queryArgs?.value?.params?.page;
  const parsedPage = Number(rawPage);

  const query =
    isNaN(parsedPage) || parsedPage < 1
      ? { ...omit(queryArgs?.value, ["page"]) }
      : {
          ...queryArgs?.value,
          params: { ...queryArgs?.value?.params, page: parsedPage },
        };

  return query;
};
