<template>
  <aside>
    <router-link to="/" class="title">
      <h1 class="title__name">
        Mathieu <span class="title__name--color">MERCIER</span>
      </h1>
      <p class="title__description">développeur web</p>
    </router-link>
    <img
      class="portrait"
      src="../assets/images/portrait.jpg"
      alt="Mathieu MERCIER"
    />
    <nav>
      <ul class="nav__links">
        <li><router-link to="/" :class="$route.path === '/' ? 'active' : ''">Accueil</router-link></li>
        <li><router-link to="/realisations" :class="$route.path === '/realisations' ? 'active' : ''">Réalisations</router-link></li>
        <li><router-link to="/prestations-web" :class="$route.path === '/prestations-web' ? 'active' : ''">Prestations Web</router-link></li>
        <li><router-link to="/autres-prestations" :class="$route.path === '/autres-prestations' ? 'active' : ''">Autres prestations</router-link></li>
        <li><router-link to="/contact" :class="$route.path === '/contact' ? 'active' : ''">Contact</router-link></li>
        <li><router-link to="/CV" :class="$route.path === '/CV' ? 'active' : ''">CV</router-link></li>
      </ul>
    </nav>
    <div class="nav__socials">
      <a href=""><i class="far fa-envelope"></i></a>
      <a href=""><i class="fab fa-github"></i></a>
      <a href=""><i class="fab fa-linkedin-in"></i></a>
      <a href=""><i class="fab fa-facebook-f"></i></a>
    </div>
  </aside>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "ASide",
  components: {},
};
</script>