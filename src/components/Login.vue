<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-96">
      <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
      <form @submit.prevent="onSubmit(formData)">
        <div class="mb-4">
          <label class="block text-sm font-medium mb-2" for="email"
            >Email</label
          >
          <input
            v-model="formData.email"
            type="text"
            id="email"
            required
            class="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter your email"
          />
        </div>
        <div class="mb-6">
          <label class="block text-sm font-medium mb-2" for="password"
            >Password</label
          >
          <input
            v-model="formData.password"
            type="password"
            required
            id="password"
            class="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import axios from "axios";

axios.defaults.withCredentials = true;

const formData = reactive({
  email: "",
  password: "",
});

const onSubmit = async () => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/admin/v1/login",
      formData
    );
    console.log(response.data);
  } catch (error) {
    console.error("Login Failed!.", error);
  }
};
</script>

<style lang="scss" scoped></style>
