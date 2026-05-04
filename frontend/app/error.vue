<script setup lang="ts">
import type { NuxtError } from "#app";

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
        <button
          @click="handleError"
          class="inline-flex items-center justify-center px-6 py-2.5 border border-gray-200 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-all duration-200"
        >
          Go back home
        </button>
      </div>
    </div>
  </div>
</template>
