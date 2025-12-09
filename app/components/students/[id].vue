<template>
  <UCard class="p-6">
    <template #header>
      <h1 class="text-xl font-bold">Student Details</h1>
    </template>

    <div v-if="student">
      <p><strong>ID:</strong> {{ id }}</p>
      <p><strong>Name:</strong> {{ name }}</p>
      <p><strong>Email:</strong> {{ email }}</p>
      <p><strong>GPA:</strong> {{ currentGPA }}</p>
      <p><strong>Grade:</strong> {{ grade }}</p>
    </div>

    <hr class="my-4" />

    <h2 class="font-semibold text-lg mb-2">Marks</h2>

    <UTable :rows="marks" :columns="markColumns" />
  </UCard>
</template>
<script setup>
const route = useRoute();
const id = route.params.id;

const { data: student } = await useFetch(`/api/Students/${id}`);

const { data: marks } = await useFetch(`/api/Marks/student/${id}`);

const markColumns = [
  { key: "subject", label: "Subject" },
  { key: "score", label: "Marks" },
  { key: "grade", label: "Grade" },
];
</script>
