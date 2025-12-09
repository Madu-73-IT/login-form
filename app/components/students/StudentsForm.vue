<template>
  <div class="flex items-center justify-center bg-gray-50 p-6 ml-6">
    <UCard
      class="w-full max-w-xl shadow-lg border border-gray-200 rounded-2xl bg-white"
    >
      <template #header>
        <h2 class="text-2xl font-semibold text-gray-800">Add Student</h2>
      </template>

      <UForm :state="form" @submit="onSubmit" class="space-y-5">
        <div>
          <label class="block font-medium mb-1 text-gray-700">Full Name</label>
          <UInput v-model="form.name" type="text" class="w-full" />
        </div>

        <div>
          <label class="block font-medium mb-1 text-gray-700">Email</label>
          <UInput v-model="form.email" type="email" class="w-full" />
        </div>

        <div>
          <label class="block font-medium mb-1">Classroom</label>

          <select
            v-model="form.classRoom"
            class="w-full px-4 py-2 border border-gray-300 rounded-xl"
          >
            <option value="" disabled>Select Classroom</option>
            <option
              v-for="c in classroomOptions"
              :key="c.value"
              :value="c.value"
            >
              {{ c.label }}
            </option>
          </select>
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
  name: "",
  email: "",
  classRoom: "",
});
const classroomOptions = [
  { label: "Grade 10A", value: "Grade 10A" },
  { label: "Grade 11A", value: "Grade 11A" },
];

const onSubmit = async () => {
  try {
    await $fetch("/api/Students", {
      method: "POST",
      body: form,
    });

    navigateTo("/students");
  } catch (err) {
    console.error(err);
  }
};
</script>
