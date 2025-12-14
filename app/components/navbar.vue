<template>
  <nav class="flex justify-between bg-blue-400">
    <div class="size-16 ml-6">
      <img src="/accusoft.png " alt="" />
    </div>

    <div class="flex items-center">
      <UIcon name="i-lucide-user" class="w-6 h-6" />
      <p class="text-black ml-2 mr-2">{{ userEmail }}</p>
      <UButton @click="logout" class="ml-4 mr-4 bg-blue-400">Logout</UButton>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCookie, navigateTo } from "#app";

const token = useCookie("token");
const userEmail = ref("");

onMounted(() => {
  if (token.value) {
    try {
      const payload = token.value.split(".")[1];
      const decoded = JSON.parse(atob(payload));
      userEmail.value = decoded.email;
    } catch (e) {
      console.error("Invalid token", e);
    }
  }
});

const logout = () => {
  token.value = null;
  userEmail.value = "";
  navigateTo("/login");
};
</script>
<style scoped></style>
