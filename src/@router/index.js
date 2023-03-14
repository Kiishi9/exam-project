import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HelloWorld.vue'
import About from '../components/About.vue'
import NotFound from "../components/NotFound.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    props: {msg: "Sekx"}
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router