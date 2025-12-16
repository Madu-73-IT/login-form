<template>
  <nav class="flex justify-between bg-blue-400">
    <div class="size-16 ml-6">
      <img src="/accusoft.png " alt="" />
    </div>

    <div class="flex items-center">
      <UIcon name="i-lucide-user" class="w-6 h-6" />
      <p class="text-black ml-2 mr-2">{{ authStore.userEmail }}</p>
      <UButton @click="logout" class="ml-4 mr-4 bg-blue-400">Logout</UButton>
    </div>
  </nav>
</template>

<script setup>
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();

onMounted(() => {
  authStore.loadFromCookies();
});

const logout = () => {
  authStore.logout();
};
</script>
<style scoped></style>
