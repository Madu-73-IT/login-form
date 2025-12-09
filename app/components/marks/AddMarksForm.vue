<template>
  <div class="flex items-center justify-center bg-gray-50 p-6">
    <UCard
      class="w-full max-w-xl shadow-lg border border-gray-200 rounded-2xl bg-white"
    >
      <template #header>
        <h2 class="text-2xl font-semibold text-gray-800">Add Mark</h2>
      </template>

      <UForm :state="form" @submit="onSubmit" class="space-y-5">
        <div>
          <label class="block font-medium mb-1 text-gray-700">Student</label>
          <select
            v-model="form.studentId"
            class="w-full px-4 py-2 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500"
          >
            <option disabled value="">Select Student</option>
            <option v-for="s in students" :key="s.id" :value="s.id">
              {{ s.name }}
            </option>
          </select>
        </div>

        <div>
          <label class="block font-medium mb-1 text-gray-700">Subject</label>
          <select
            v-model="form.subjectId"
            class="w-full px-4 py-2 border border-gray-300 rounded-xl"
          >
            <option disabled value="">Select Subject</option>
            <option v-for="sub in subjects" :key="sub.id" :value="sub.id">
              {{ sub.name }}
            </option>
          </select>
        </div>

        <div>
          <label class="block font-medium mb-1 text-gray-700">Mark (%)</label>
          <UInput v-model="form.mark" type="number" class="w-full" />
        </div>

        <UButton
          type="submit"
          color="primary"
          size="lg"
          class="w-full mt-4 rounded-xl"
        >
          Submit
        </UButton>
      </UForm>
    </UCard>
  </div>
</template>

<script setup>
const form = reactive({
  studentId: "",
  subjectId: "",
  mark: "",
});

const students = ref([]);
const subjects = ref([]);

onMounted(async () => {
  students.value = await $fetch("/api/Students");
  subjects.value = await $fetch("/api/Subjects");
});

const onSubmit = async () => {
  try {
    await $fetch("/api/Marks", {
      method: "POST",
      body: form,
    });

    navigateTo("/marks");
  } catch (err) {
    console.error("Error:", err);
  }
};
</script>
