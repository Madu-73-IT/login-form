<template>
  <div class="h-screen">
    <Navbar />
    <div class="h-full w-full grid grid-cols-4">
      <Sidebar />
      <div class="col-span-3 h-full bg-blue-200">
        <slot />
      </div>
    </div>
  </div>
</template>
<script setup>
import Navbar from "~/components/navbar.vue";
import Sidebar from "~/components/sidebar.vue";
</script>

<style scoped></style>
