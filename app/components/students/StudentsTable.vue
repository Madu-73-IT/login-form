<template>
  <table class="min-w-full">
    <thead class="bg-gray-50">
      <tr>
        <th
          class="px-6 py-3 text-left text-sm font-medium text-gray-800 uppercase bg-gray-100"
        >
          ID
        </th>
        <th
          class="px-6 py-3 text-left text-sm font-medium text-gray-800 uppercase bg-gray-100"
        >
          Name
        </th>
        <th
          class="px-6 py-3 text-left text-sm font-medium text-gray-800 uppercase bg-gray-100"
        >
          Email
        </th>
        <th
          class="px-6 py-3 text-left text-sm font-medium text-gray-800 uppercase bg-gray-100"
        >
          GPA
        </th>
        <th
          class="px-6 py-3 text-left text-sm font-medium text-gray-800 uppercase bg-gray-100"
        >
          Grade
        </th>
        <th
          class="px-6 py-3 text-left text-sm font-medium text-gray-800 uppercase bg-gray-100"
        >
          Actions
        </th>
      </tr>
    </thead>

    <tbody class="bg-white">
      <tr
        v-for="student in students"
        :key="student.id"
        class="hover:bg-gray-50"
      >
        <td class="px-6 py-4 text-sm text-gray-700">
          {{ student.id }}
        </td>
        <td class="px-6 py-4 text-sm text-gray-700">
          {{ student.name }}
        </td>
        <td class="px-6 py-4 text-sm text-gray-700">
          {{ student.email }}
        </td>
        <td class="px-6 py-4 text-sm text-gray-700">
          {{
            typeof student.currentGPA === "number"
              ? student.currentGPA.toFixed(2)
              : "0.00"
          }}
        </td>
        <td class="px-6 py-4 text-sm text-gray-700">
          {{ student.grade }}
        </td>
        <td class="px-6 py-4 text-sm text-gray-700">
          <router-link
            :to="`/students/${student.id}`"
            class="text-blue-600 hover:text-blue-800 font-medium"
          >
            View
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
interface Student {
  id: number;
  name: string;
  email: string;
  currentGPA: number;
  grade: string;
}
const token = useCookie("token");
const { data: students } = await useAsyncData<Student[]>("students", () =>
  $fetch("/api/Students", {
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  })
);
</script>
