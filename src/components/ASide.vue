<template>
  <aside id="sideNavigation">
    
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
        <li><router-link to="/" :class="$route.path === '/' ? 'active' : ''" @click="showSideNavigation">Accueil</router-link></li>
        <li><router-link to="/realisations" :class="$route.path === '/realisations' ? 'active' : ''" @click="showSideNavigation">Réalisations</router-link></li>
        <li><router-link to="/prestations-web" :class="$route.path === '/prestations-web' ? 'active' : ''" @click="showSideNavigation">Prestations Web</router-link></li>
        <li><router-link to="/autres-prestations" :class="$route.path === '/autres-prestations' ? 'active' : ''" @click="showSideNavigation">Autres prestations</router-link></li>
        <li><router-link to="/contact" :class="$route.path === '/contact' ? 'active' : ''" @click="showSideNavigation">Contact</router-link></li>
        <li><router-link to="/CV" :class="$route.path === '/CV' ? 'active' : ''" @click="showSideNavigation">CV</router-link></li>
      </ul>
    </nav>
    <div class="nav__socials">
      <a href="https://github.com/MathieuMer"><i class="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/m-mercier-dev"><i class="fab fa-linkedin-in"></i></a>
    </div>
  </aside>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "ASide",
  components: {},
  methods: {
    showSideNavigation(event) {
      event.preventDefault();
      if (this.$store.state.visibleAside) {
        document.getElementById("sideNavigation").style.marginLeft = "-100vw";
        document.getElementById("main").style.marginTop = "0";
        document.getElementById("main").style.opacity = "1";
        this.$store.dispatch("toggleAside")
          .then(() => {
            console.log("toggle menu")
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  }
  
};
</script>