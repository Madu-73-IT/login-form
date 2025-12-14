<template>
  <div class="p-6 max-w-xl mx-auto">
    <AddMarksForm />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});
import AddMarksForm from "~/components/marks/AddMarksForm.vue";
</script>
