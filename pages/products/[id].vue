<template>
  <div>
    <h1>{{ response.details.subject }}</h1>

    <img :src="response.details.thumbnail.url" width="800" />
    <div>{{ response.details.subject }}</div>
    <div v-html="response.details.contents"></div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
console.log(route.params.id)
const config = useRuntimeConfig();

const { data: response } = await useFetch(
  `${config.public.apiBase}/rcms-api/3/products/${route.params.id}`,
  {
    credentials: "include",
  }
);
</script>