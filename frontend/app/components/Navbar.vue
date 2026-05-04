<script setup lang="ts"></script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
  >
    <div
      class="container mx-auto flex h-14 max-w-screen-2xl items-center px-4 md:px-8"
    >
      <!-- Left side: Brand / Logo -->
      <div class="mr-4 flex">
        <NuxtLink to="/" class="mr-6 flex items-center space-x-2">
          <span class="font-bold sm:inline-block text-lg tracking-tight">
            NuxtApp.
          </span>
        </NuxtLink>

        <!-- Center: Desktop Navigation Links -->
        <nav class="hidden md:flex items-center space-x-6 text-sm font-medium">
          <NuxtLink
            to="/about"
            class="transition-colors hover:text-foreground text-foreground/60"
            active-class="text-foreground font-semibold"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/projects"
            class="transition-colors hover:text-foreground text-foreground/60"
            active-class="text-foreground font-semibold"
          >
            Projects
          </NuxtLink>
        </nav>
      </div>

      <!-- Right side: Actions -->
      <div class="flex flex-1 items-center justify-end space-x-4">
        <nav class="flex items-center space-x-2">
          <!-- Your Mode Toggle -->
          <ModeToggle />
          <Button class="hidden md:flex"> Sign In </Button>
        </nav>
      </div>
    </div>
  </header>
</template>
