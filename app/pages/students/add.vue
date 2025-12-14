<template>
  <div class="p-6 max-w-xl mx-auto">
    <StudentsForm />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});
</script>
