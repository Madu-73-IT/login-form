import { ref, computed, watch, type Ref } from "vue";

// 1. Define the type for your User object based on your backend response
interface User {
  email: string;
  name?: string; // Assuming 'name' might also be included
  // Add any other properties your user object has
}

export const useUser = () => {
  // 2. Get the raw cookie value (useCookie automatically handles Ref<string | undefined>)
  const userCookie = useCookie("user");

  // 3. Create a reactive reference for the parsed user object, typed as Ref<User | null>
  const user: Ref<User | null> = ref(null);

  // 4. Watch for changes in the cookie and update the reactive state
  watch(
    userCookie,
    (newValue) => {
      if (newValue) {
        try {
          // Parse the JSON string back into an object and assert the type
          user.value = JSON.parse(newValue) as User;
        } catch (e) {
          console.error("Failed to parse user cookie:", e);
          user.value = null;
        }
      } else {
        user.value = null;
      }
    },
    { immediate: true }
  ); // Run immediately on load

  return {
    user,
    // Helper to get just the email (safe access). Returns a ComputedRef<string | undefined>
    email: computed(() => user.value?.email),
  };
};
