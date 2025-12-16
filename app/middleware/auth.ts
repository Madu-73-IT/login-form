import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore();
  const token = useCookie("token");

  if (!authStore.token && token.value) {
    authStore.setToken(token.value);
  }

  if (!token.value) {
    return navigateTo("/login");
  }
});
