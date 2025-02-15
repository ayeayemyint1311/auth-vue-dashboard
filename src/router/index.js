import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import Dashboard from "../components/Dashboard.vue";
import { useRouter } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("auth_token");

  if (to.meta.requiresAuth && !token) {
    next("/login"); // Redirect to login if the route requires auth but user isn't authenticated
  } else {
    next();
  }
});

export default router;
