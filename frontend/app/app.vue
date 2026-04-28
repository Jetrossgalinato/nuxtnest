<script setup lang="ts">
// Fetching the default "Hello World!" from the NestJS backend
const { data: message } = await useFetch("http://localhost:3001");
</script>

<template>
  <div style="font-family: sans-serif; padding: 2rem">
    <h1>API Response:</h1>
    <p>{{ message }}</p>
  </div>
</template>
