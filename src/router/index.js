import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import FaqView from '../views/FaqView.vue'
import PrivateView from '../views/PrivateView.vue'
import PublicView from '../views/PublicView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    // path: "*",
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    // path: "*",
    path: "/faq",
    name: "FaqView",
    component: FaqView,
  },
  
  {
    path: '/private',
    name: 'private',
    component: PrivateView
  },
  {
    path: '/public',
    name: 'public',
    component: PublicView
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
