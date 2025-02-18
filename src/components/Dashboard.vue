<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <Sidebar v-model:visible="isSidebarVisible" class="w-64 border-r shadow-md">
      <div class="p-4 text-xl font-semibold text-gray-700">
        <i class="pi pi-bars mr-2"></i> Dashboard
      </div>
      <ul class="list-none p-3">
        <li v-for="(item, index) in menuItems" :key="index">
          <a
            href="#"
            class="flex items-center p-3 rounded-lg hover:bg-gray-200"
          >
            <i :class="item.icon" class="mr-3 text-lg"></i> {{ item.label }}
          </a>
        </li>
      </ul>
    </Sidebar>

    <!-- Main Content -->
    <div class="flex flex-col flex-1">
      <!-- Navbar -->
      <Menubar :model="navItems" class="shadow-md">
        <template #start>
          <Button
            icon="pi pi-bars"
            class="p-button-text"
            @click="isSidebarVisible = true"
          />
        </template>
        <template #end>
          <Button
            label="Logout"
            icon="pi pi-sign-out"
            class="p-button-danger p-button-text"
          />
        </template>
      </Menubar>

      <!-- Content Area -->
      <main class="flex-1 p-6 bg-gray-100">
        <Card class="shadow-lg">
          <template #title> Welcome to PrimeVue Dashboard </template>
          <template #content>
            <p class="text-gray-600">
              This is a fully responsive dashboard layout using PrimeVue
              components.
            </p>
          </template>
        </Card>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isSidebarVisible = ref(false);
const menuItems = ref([
  { label: "Dashboard", icon: "pi pi-home" },
  { label: "Analytics", icon: "pi pi-chart-line" },
  { label: "Users", icon: "pi pi-users" },
  { label: "Settings", icon: "pi pi-cog" },
]);

const navItems = ref([]);
</script>

<style scoped>
/* Custom styles (if needed) */
</style>
