<template>
  <div class="p-6 flex justify-center">
    <UCard class="w-full max-w-2xl border border-gray-200 rounded-2xl bg-white">
      <template #header>
        <h1 class="text-2xl font-bold text-gray-800">Student Marks</h1>
      </template>

      <div class="space-y-4 mt-4">
        <div class="flex justify-between">
          <span class="font-medium text-gray-600">ID:</span>
          <span class="text-gray-800">{{ student.id }}</span>
        </div>

        <div class="flex justify-between">
          <span class="font-medium text-gray-600">Subjects:</span>
          <span class="text-gray-800">{{ student.subjects }}</span>
        </div>
        <div class="flex justify-between">
          <span class="font-medium text-gray-600">Mark:</span>
          <span class="text-gray-800">{{ student.mark }}</span>
        </div>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const token = useCookie("token");
interface Student {
  id: number;
  mark: string;

  subjects: string;
}

const route = useRoute();
const studentId = route.params.id as string;

const student = ref<Student>({
  id: 0,
  mark: "",
  subjects: "",
});

onMounted(async () => {
  try {
    student.value = await $fetch<Student>(`/api/Students/${studentId}/marks`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
  } catch (err) {
    console.error("Failed :", err);
  }
});
</script>
