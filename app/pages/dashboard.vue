<template>
  <div class="p-6 space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-red-400 shadow rounded-xl p-6">
        <p class="text-gray-500 text-sm">Total Students</p>
        <p class="text-3xl font-bold mt-2">
          {{ stats?.totalStudents ?? "-" }}
        </p>
      </div>

      <div class="bg-green-400 shadow rounded-xl p-6">
        <p class="text-gray-500 text-sm">Average GPA</p>
        <p class="text-3xl font-bold mt-2">
          {{ stats?.averageGPA ?? "-" }}
        </p>
      </div>
    </div>

    <div v-if="pending" class="text-gray-500">Loading dashboard data...</div>
    <div v-if="error" class="text-red-500">Failed to load dashboard data</div>
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
} = await useFetch("/api/dashboard/stats", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

onMounted(() => {
  console.log("onMounted: dashboard");
});
</script>

<style scoped></style>
