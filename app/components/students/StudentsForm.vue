<template>
  <UCard
    class="w-full max-w-xl shadow-lg border border-gray-200 rounded-2xl bg-white"
  >
    <template #header>
      <h2 class="text-2xl font-semibold text-gray-800 text-center">
        Add Student
      </h2>
    </template>

    <UForm :state="form" @submit.prevent="onSubmit" class="space-y-5">
      <div>
        <label class="block font-medium mb-1 text-gray-700">Full Name</label>
        <UInput v-model="form.name" type="text" class="w-full" required />
      </div>

      <div>
        <label class="block font-medium mb-1 text-gray-700">Email</label>
        <UInput v-model="form.email" type="email" class="w-full" required />
      </div>

      <div>
        <label class="block font-medium mb-1">Classroom</label>

        <select
          v-model="form.classRoom"
          class="w-full px-4 py-2 border border-gray-300 rounded-xl"
        >
          <option value="" disabled>Select Classroom</option>
          <option v-for="c in classroomOptions" :key="c.value" :value="c.value">
            {{ c.label }}
          </option>
        </select>
      </div>

      <button
        type="submit"
        class="w-full bg-blue-400 text-white py-3 rounded-xl font-medium"
      >
        Submit
      </button>
    </UForm>
  </UCard>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { navigateTo } from "#app";
const token = useCookie("token");
const form = reactive({
  name: "",
  email: "",
  classRoom: "",
});

const classroomOptions = [
  { label: "Grade 10A", value: "10A" },
  { label: "Grade 11A", value: "11A" },
];

const onSubmit = async () => {
  try {
    const studentDTO = {
      id: 0,
      name: form.name,
      email: form.email,
      classRoom: form.classRoom,
      grade: form.classRoom,

      currentGPA: 0.0,
    };

    await $fetch("/api/Students", {
      method: "POST",
      body: studentDTO,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.value}`,
      },
    });

    Object.assign(form, { name: "", email: "", classRoom: "" });
    navigateTo("/students");
  } catch (err) {
    console.error("Submission Error:", err);
  }
};
</script>
