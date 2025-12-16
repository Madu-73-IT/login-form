import { jwtDecode } from "jwt-decode";
import { defineStore } from "pinia";

interface JwtPayload {
  email: string;
}

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    token: null as string | null,
    refreshToken: null as string | null,
    user: null as { email: string } | null,
  }),

  actions: {
    setToken(token: string) {
      this.token = token;
      useCookie("token").value = token;

      const decoded = jwtDecode<JwtPayload>(token);

      this.user = {
        email: decoded.email,
      };

      useCookie("user").value = JSON.stringify(this.user);
    },

    loadFromCookies() {
      const tokenCookie = useCookie("token");

      if (tokenCookie.value) {
        this.token = tokenCookie.value;

        try {
          const decoded = jwtDecode<JwtPayload>(tokenCookie.value);
          this.user = {
            email: decoded.email,
          };
        } catch {
          this.user = null;
        }
      }
    },

    logout() {
      this.token = null;
      this.user = null;

      useCookie("token").value = null;
      useCookie("user").value = null;

      navigateTo("/login");
    },
  },
});
