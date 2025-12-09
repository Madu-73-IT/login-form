<template>
  <div class="p-6 flex justify-center">
    <UCard
      class="w-full max-w-2xl shadow-lg border border-gray-200 rounded-2xl bg-white"
    >
      <template #header>
        <h1 class="text-2xl font-bold text-gray-800">Student Details</h1>
      </template>

      <div class="space-y-4 mt-4">
        <div class="flex justify-between">
          <span class="font-medium text-gray-600">ID:</span>
          <span class="text-gray-800">{{ student.id }}</span>
        </div>

        <div class="flex justify-between">
          <span class="font-medium text-gray-600">Name:</span>
          <span class="text-gray-800">{{ student.name }}</span>
        </div>

        <div class="flex justify-between">
          <span class="font-medium text-gray-600">Email:</span>
          <span class="text-gray-800">{{ student.email }}</span>
        </div>

        <div class="flex justify-between">
          <span class="font-medium text-gray-600">Classroom:</span>
          <span class="text-gray-800">{{ student.grade }}</span>
        </div>

        <div class="flex justify-between">
          <span class="font-medium text-gray-600">GPA:</span>
          <span class="text-gray-800">
            {{
              typeof student.currentGPA === "number"
                ? student.currentGPA.toFixed(2)
                : "0.00"
            }}
          </span>
        </div>
      </div>

      <div class="mt-6 flex justify-end">
        <UButton color="secondary" @click="$router.push('/students')">
          Back to Students
        </UButton>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

interface Student {
  id: number;
  name: string;
  email: string;
  grade: string;
  currentGPA: number;
}

const route = useRoute();
const studentId = route.params.id as string;

const student = ref<Student>({
  id: 0,
  name: "",
  email: "",
  grade: "",
  currentGPA: 0,
});

onMounted(async () => {
  try {
    student.value = await $fetch<Student>(`/api/Students/${studentId}`);
  } catch (err) {
    console.error("Failed to fetch student:", err);
  }
});
</script>
