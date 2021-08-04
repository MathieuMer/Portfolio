import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'

const routes = [
  {
    path: '/',
    name: 'accueil',
    component: Accueil
  },
  {
    path: '/realisations',
    name: 'Realisations',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "realisations" */ '../views/Realisations.vue')
  },
  {
    path: '/prestations-web',
    name: 'PrestationsWeb',
    component: () => import(/* webpackChunkName: "prestations-web" */ '../views/PrestationsWeb.vue')
  },
  {
    path: '/autres-prestations',
    name: 'AutresPrestations',
    component: () => import(/* webpackChunkName: "autres-prestations" */ '../views/AutresPrestations.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/CV',
    name: 'CV',
    component: () => import(/* webpackChunkName: "CV" */ '../views/CV.vue')
  },
  { path: '', component: Accueil },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior: (to, from) => {
    console.log(to, from)
    document.getElementById('main').scrollIntoView()
    return null;
  },
  routes
})



export default router
