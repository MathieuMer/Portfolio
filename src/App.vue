<template>
  <div id="bloc-page">
    

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
    
  }
  
}
</script>

<style>
 @import './assets/css/all.min.css';
 @import './assets/css/style.css';
</style>
