// router.js or router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import SuperHeroDetailsView from '../views/SuperHeroDetailsView.vue'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: "/", component: HomeView, name: 'home' },
  { path: "/superhero/:id", component: SuperHeroDetailsView, name: 'superhero' },
  { path: "/about", component: AboutView, name: 'about' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
