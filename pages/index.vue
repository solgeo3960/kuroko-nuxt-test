<template>
  <div>topページ</div>
</template>

<script setup>
const config = useRuntimeConfig();

const { data: response } = await useFetch(
  `${config.public.apiBase}/rcms-api/3/products/3`,
  {
    credentials: "include",
  }
);
</script>