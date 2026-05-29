import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
  routes: [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
  ]
})

export default router