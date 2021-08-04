<template>
  <div id="bloc-page">
    <div class="menu__button" @click="showSideNavigation">
      <i class="fas fa-bars"></i>
    </div>

    <ASide />
    
    <main id="main">
      <router-view/>
    </main>
  </div>
</template>

<script>
import ASide from '@/components/ASide.vue';

export default {
  components: {
    ASide,
  },
  data() {
    return {
    };
  },
  methods: {
    showSideNavigation(event) {
      event.preventDefault();
      if (!this.$store.state.visibleAside) {
        
        document.getElementById("sideNavigation").style.marginLeft = "0";
        document.getElementById("main").style.marginTop = "100vh";
        document.getElementById("main").style.opacity = "0";
        this.$store.dispatch("toggleAside")
          .then(() => {
            console.log("toggle menu")
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
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
  
}
</script>

<style>
 @import './assets/css/all.min.css';
 @import './assets/css/style.css';
</style>
