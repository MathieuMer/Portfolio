import { createWebHistory, createRouter } from "vue-router";
import Accueil from '../views/Accueil.vue';
import Realisations from '../views/Realisations.vue';
import Contact from '../views/Contact.vue';
import CV from '../views/CV.vue';

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
    component: Realisations
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/CV',
    name: 'CV',
    component: CV
  },
  { path: '', component: Accueil },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior (to, from, savedPosition) {
    let scrollOptions = {
      top: 0,
      behavior: 'smooth'
    }
    document.getElementById("main").scrollTo(scrollOptions)
  }
});

export default router;
