<template>
  <div class="p-6 space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <UCard class="bg-green-500">
        <UIcon name="i-lucide-users" />
        <template #header>
          <p class="text-white text-xl text-center">Total Students</p>
        </template>

        <p class="text-3xl font-semibold mt-2">
          {{ stats?.totalStudents ?? "-" }}
        </p>
      </UCard>

      <UCard class="bg-yellow-300">
        <UIcon name="i-lucide-activity" />
        <template #header>
          <p class="text-white text-center text-xl">Average GPA</p>
        </template>
        <p class="text-3xl font-semibold mt-2">
          {{ stats?.averageGPA ?? "-" }}
        </p>
      </UCard>
    </div>
    <div v-if="pending" class="text-gray-500">Loading dashboard data...</div>

    <div v-if="error" class="text-red-600">
      Error loading data: {{ error.message }}
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});

const token = useCookie("token");

const {
  data: stats,
  pending,
  error,
} = await useFetch("/api/Dashboard/stats", {
  headers: {
    Authorization: `Bearer ${token.value}`,
  },

  watch: [token],
});

onMounted(() => {
  console.log("onMounted: dashboard");
});
</script>

<style scoped></style>
