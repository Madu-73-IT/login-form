import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {

  state: () => {
    return {
     user: {
      name: "Prashadani Rathnayake",
      email: "abcd@mno.com", 
    
  },
}
  }
});
