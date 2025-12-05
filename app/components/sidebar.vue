<template>
  <div class="h-full bg-gray-500">
    <UNavigationMenu
      orientation="vertical"
      :items="items"
      :ui="{
        link: 'text-black pl-6',
      }"
      class="p-10 text-sm text-black"
    />
  </div>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem[]>([
  [
    {
      label: "Dashboard",
      icon: "i-lucide-home",
      type: "link",
      to: "/dashboard",
    },

    {
      label: "Students",
      icon: "i-lucide-users",
      type: "link",
      to: "/students",
    },
      {
      label: "Marks",
      icon: "i-lucide-calculator",
      type: "link",
      to: "/marks",
    },
  ],
]);
</script>

<style scoped></style>
