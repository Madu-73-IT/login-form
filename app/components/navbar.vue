<template>
  <nav class="flex justify-between bg-blue-400">
    <div class="size-16 ml-6">
      <img src="/accusoft.png " alt="" />
    </div>

    <div class="flex items-center">
      <UIcon name="i-lucide-user" class="w-6 h-6" />
      <p class="text-black ml-2 mr-2">{{ userStore.user.email }}</p>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();
</script>

<style scoped></style>
