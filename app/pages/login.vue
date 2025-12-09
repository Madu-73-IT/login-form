<template>
  <div class="flex items-center justify-center bg-gray-600 min-h-screen">
    <UCard class="bg-blue-500 min-w-100 max-w-100">
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
            type="email"
          />
        </UFormField>

        <UFormField label="" name="password">
          <UInput
            v-model="data.password"
            icon="i-lucide-lock"
            name="password"
            type="password"
          />
        </UFormField>

        <div class="flex justify-center">
          <UButton @click="Login" class="justify-items-center" type="submit">
            SIGN IN
          </UButton>
        </div>
      </UForm>
    </UCard>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});

const toast = useToast();

const data = ref({
  email: "",
  password: "",
});

const Login = async () => {
  console.log("login start");

  try {
    await $fetch("api/login", {
      method: "POST",
      body: data.value,
    });

    toast.add({
      title: "login successfull",
      description: "login successfull.",
      color: "success",
    });
    navigateTo("/dashboard");
  } catch (error) {
    console.log("Login failed");
    console.log("error", error.data);

    //alert(error.data.statusMessage);
    toast.add({
      title: "login faild.",
      description: "error.",

      color: "error",
    });
  }
};
</script>

<style scoped></style>
