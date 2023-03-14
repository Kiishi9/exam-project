import { createRouter, createWebHistory } from 'vue-router'

import About from '../components/About.vue'
import NotFound from "../components/NotFound.vue"
import Counter from "../components/CounterApp.vue"

const routes = [
  {
    path: '/',
    redirect: "/counter"
  },
  {
    path: '/counter',
    name: 'Counter',
    component: Counter,
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