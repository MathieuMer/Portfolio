<template>
  <div id="bloc-page">
    <ASide />
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import ASide from '@/components/ASide.vue';

export default {
  components: {
    ASide,
  }
  
}
</script>

<style>
 @import './assets/css/all.min.css';
 @import './assets/css/style.css';
</style>
