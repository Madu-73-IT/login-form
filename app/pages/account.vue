<template>
  <div class="grid grid-cols-2">
    <div class="col-span-1 bg-blue-500 bg-[url(/img/create.avif)]"></div>
    <div class="flex items-center justify-center min-h-screen bg-blue-600">
      <UCard class="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <template #header>
          <h1 class="text-2xl font-semibold text-black text-center">
            CREATE ACCOUNT
          </h1>
        </template>

        <UForm class="space-y-4">
          <UFormField label="Email">
            <UInput
              v-model="user.email"
              type="email"
              icon="i-lucide-mail"
              class="w-full"
            />
          </UFormField>

          <UFormField label="Password">
            <UInput
              v-model="user.password"
              type="password"
              icon="i-lucide-lock"
              class="w-full"
            />
          </UFormField>

          <UFormField label="Confirm Password">
            <UInput
              v-model="user.confirmPassword"
              type="password"
              icon="i-lucide-lock"
              class="w-full"
            />
          </UFormField>

          <button
            @click="createUser"
            class="w-full bg-blue-500 text-white py-3 rounded-xl font-medium text-center"
          >
            SIGN UP
          </button>

          <p class="text-center mt-4 text-sm">
            Already have an account?
            <NuxtLink to="/login" class="text-blue-600 font-semibold"
              >Login</NuxtLink
            >
          </p>
        </UForm>
      </UCard>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});

const toast = useToast();

const user = ref({
  email: "",
  password: "",
  confirmPassword: "",
});

const createUser = async () => {
  if (
    !user.value.email ||
    !user.value.password ||
    !user.value.confirmPassword
  ) {
    toast.add({ title: "All fields are required", color: "error" });
    return;
  }

  if (user.value.password !== user.value.confirmPassword) {
    toast.add({ title: "Passwords do not match", color: "error" });
    return;
  }

  try {
    await $fetch("/api/Auth/CreateUser", {
      method: "POST",
      body: user.value,
    });

    toast.add({
      title: "Account Created",
      description: "You can now login with your credentials",
      color: "success",
    });

    navigateTo("/login");
  } catch (error) {
    toast.add({
      title: "Registration Failed",
      description: "Something went wrong",
      color: "error",
    });
  }
};
</script>

<style></style>
