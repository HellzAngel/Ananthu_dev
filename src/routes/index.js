// router/main.js
import { createRouter, createWebHistory } from 'vue-router'
import Project from "../views/Project.vue"
import Home from "../views/Home.vue"

const routes = [
    {
        path: "/Ananthu_dev/",
        name: "Home",
        component: Home,
      },
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
  