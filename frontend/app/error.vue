<script setup lang="ts">
import type { NuxtError } from "#app";
import Button from "./components/ui/button/Button.vue";

defineProps<{ error: NuxtError }>();

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 px-6 font-sans"
  >
    <div class="max-w-md w-full text-center space-y-6">
      <!-- Status Code -->
      <h1 class="text-8xl font-light tracking-tighter text-gray-900">
        {{ error.statusCode || 500 }}
      </h1>

      <!-- Error Message -->
      <div class="space-y-2">
        <h2 class="text-2xl font-medium tracking-tight">
          Oops! Something went wrong.
        </h2>
        <p class="text-gray-500 text-sm">
          {{
            error.statusMessage ||
            error.message ||
            "We couldn't find the page you were looking for."
          }}
        </p>
      </div>

      <!-- Action Button -->
      <div class="pt-6">
        <Button @click="handleError"> Go back home </Button>
      </div>
    </div>
  </div>
</template>
