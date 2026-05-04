<!-- components/ModeToggle.vue -->
<script setup lang="ts">
import { useColorMode } from "#imports";
import { Sun, Moon } from "lucide-vue-next";

const colorMode = useColorMode();
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline" size="icon">
        <!-- Sun icon for light mode -->
        <Sun
          class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <!-- Moon icon for dark mode -->
        <Moon
          class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="colorMode.preference = 'light'">
        Light
      </DropdownMenuItem>
      <DropdownMenuItem @click="colorMode.preference = 'dark'">
        Dark
      </DropdownMenuItem>
      <DropdownMenuItem @click="colorMode.preference = 'system'">
        System
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
