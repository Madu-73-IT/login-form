<template>
  <div class="grid grid-cols-2">
    <div class="col-span-1 bg-[url(/img/login.avif)]"></div>
    <div class="flex items-center justify-center bg-sky-100 h-screen">
      <UCard class="bg-white p-8 rounded-lg shadow-lg">
        <template #header>
          <p class="text-2xl text-center font-semibold text-black">
            SIGN INTO YOUR ACCOUNT
          </p>
        </template>

        <UForm class="space-y-4 justify-items-center">
          <UFormField label="" name="email">
            <UInput
              v-model="data.email"
              icon="i-lucide-mail"
              name="email"
              placeholder="email"
              class="w-full"
              type="email"
            />
          </UFormField>

          <UFormField label="" name="password">
            <UInput
              v-model="data.password"
              icon="i-lucide-lock"
              name="password"
              placeholder="password"
              type="password"
            />
          </UFormField>

          <div class="flex justify-center">
            <UButton
              @click="Login"
              class="justify-items-center bg-blue-500"
              type="submit"
            >
              SIGN IN
            </UButton>
          </div>
          <p class="text-center mt-4 text-sm">
            Don't have an account?
            <NuxtLink to="/account" class="text-blue-600 font-semibold"
              >Sign up</NuxtLink
            >
          </p>
        </UForm>
      </UCard>
    </div>
  </div>
</template>

<script setup>
const token = useCookie("token");
const user = useCookie("user");
definePageMeta({
  layout: false,
});

const toast = useToast();

const data = ref({
  email: "",
  password: "",
});

const Login = async () => {
  try {
    const res = await $fetch("/api/Auth/Login", {
      method: "POST",
      body: data.value,
      headers: {
        "Content-Type": "application/json",
      },
    });

    token.value = res.token;
    if (res.user && res.user.email) {
      user.value = JSON.stringify(res.user);
    }
    toast.add({
      title: "Login Successful",
      color: "success",
    });

    await navigateTo("/dashboard");
  } catch (error) {
    toast.add({
      title: "Login Failed",
      description: error?.data?.message || "Invalid credentials",
      color: "error",
    });
  }
};
</script>

<style scoped></style>
