import { defineStore } from "pinia";
// Import useCookie from the Nuxt composables, which is SSR-safe
import { useCookie } from "#app";

export const useUserStore = defineStore("user", () => {
  // 1. Define the cookie reference for the token
  // useCookie is SSR-safe and automatically reads the cookie from the request/browser
  const token = useCookie("auth_token", { maxAge: 60 * 60 * 24 * 7 }); // Sets maxAge to 7 days

  // 2. Define reactive state derived from the cookie (SSR-safe)
  const email = ref("");

  // 3. Define computed state
  const isAuthenticated = computed(() => !!token.value);

  // --- ACTIONS ---

  const login = (newToken: string, userEmail: string) => {
    // 1. Save token to the cookie (SSR-safe)
    token.value = newToken;

    // 2. Update local state
    email.value = userEmail;
  };

  const logout = () => {
    // 1. Clear the cookie (SSR-safe)
    token.value = null; // Setting to null clears the cookie

    // 2. Clear local state
    email.value = "";
  };

  // 4. Return the state and actions
  return {
    // State
    token, // The token is now a ref tied to the cookie
    email,

    // Getters
    isAuthenticated,

    // Actions
    login,
    logout,
  };
});
