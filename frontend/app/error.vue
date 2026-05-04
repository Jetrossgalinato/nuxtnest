<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{ error: NuxtError }>();

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-6"
  >
    <div class="max-w-md w-full text-center space-y-6">
      <!-- Status Code -->
      <TypographyH1 class="text-8xl font-medium text-destructive">
        {{ error.statusCode || 500 }}
      </TypographyH1>

      <!-- Error Message -->
      <div class="space-y-2">
        <TypographyH2 class="text-2xl font-medium">
          Oops! Something went wrong.
        </TypographyH2>
        <TypographyP class="text-foreground/60">
          {{
            error.statusMessage ||
            error.message ||
            "We couldn't find the page you were looking for."
          }}
        </TypographyP>
      </div>

      <!-- Action Button -->
      <div class="pt-6">
        <Button @click="handleError"> Go back home </Button>
      </div>
    </div>
  </div>
</template>
