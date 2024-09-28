<template>
  <div>
    <h1>旅行記事の一覧です。</h1>
    {{ response }}
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const { data: response } = await useFetch(
  `${config.public.apiBase}/rcms-api/3/products`,
  {
    credentials: "include",
  }
);
</script>