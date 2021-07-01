<template>
  <div class="bloc-accueil">
    <div class="bloc-accueil__titre">
      <p><strong>Bonjour, je suis Mathieu,</strong></p>
      <h2>développeur web freelance, spécialisé front-end</h2>
    </div>
    <div class="bloc-accueil__bouttons">
      <router-link class="bloc-accueil__bouttons__item" to="/realisations">REALISATIONS</router-link>
      <router-link class="bloc-accueil__bouttons__item" to="/contact">CONTACT</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Accueil',
  components: {
    
  }
}
</script>
