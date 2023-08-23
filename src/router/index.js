import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      alias: "/tasks",
      name: "tasks",
      component: () => import("../components/TaskList.vue")
    },
    {
      path: "/tasks/:id",
      name: "task-edit",
      component: () => import("../components/Task.vue")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("../components/AddTask.vue")
    },
    {
      path: "/task/detail/:id",
      name: "task-detail",
      component: () => import("../components/TaskDetail.vue")
    }
  ]
})

export default router
