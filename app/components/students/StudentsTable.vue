<template>
  <UCard class="p-6">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">Students</h1>

      <UButton color="primary" to="/students/add"> Add Student + </UButton>
    </div>

    <UTable :rows="students" :columns="columns">
      <template #actions="{ row }">
        <UButton size="xs" color="gray" :to="`/students/view?id=${row.id}`">
          View
        </UButton>
      </template>
    </UTable>
  </UCard>
</template>

<script setup>
const { data: students } = await useAsyncData("students", () =>
  $fetch("api/Students")
);

const columns = [
  { id: "id", key: "id", label: "ID" },
  { id: "name", key: "name", label: "Name" },
  { id: "email", key: "email", label: "Email" },
  { id: "currentGPA", key: "currentGPA", label: "GPA" },
  { id: "grade", key: "grade", label: "Grade" },
  { id: "actions", key: "actions", label: "Actions" },
];
</script>
