<template>
  <div class="p-6">
    <UCard
      class="w-full shadow-lg border border-gray-200 rounded-2xl bg-white p-6 space-y-4"
    >
      <template #header>
        <div class="flex justify-between items-center">
          <h1 class="text-2xl font-bold text-gray-800">Students</h1>
          <router-link
            to="/students/add"
            class="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Add Student +
          </router-link>
        </div>
      </template>

      <StudentsTable />
    </UCard>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});
</script>
