// router/main.js
import { createRouter, createWebHistory } from 'vue-router'
import Project from "../views/Project.vue"

const routes = [
    {
      path: "/project",
      name: "Project",
      component: Project,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
  