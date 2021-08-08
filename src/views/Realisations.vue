<template>
  <div class="rea__container">
    <div class="rea__entete rea__bloc">
      <h2>Réalisations</h2>
    </div>
    <div class="rea__bloc rea__container__miniatures">
      <div class="rea__miniature rea1__miniature" @click="showRea = 1">
        <h3>Groupomania</h3>
      </div>
      <div class="rea__miniature rea2__miniature" @click="showRea = 2">
        <h3>Portfolio</h3>
      </div>
      <div class="rea__miniature rea3__miniature" @click="showRea = 3">
        <h3>OhMyfood</h3>
      </div>
      <div class="rea__miniature rea4__miniature" @click="showRea = 4">
        <h3>So Peckoko</h3>
      </div>
    </div>

    <rea1 v-if="showRea === 1" />
    <rea2 v-if="showRea === 2" />
    <rea3 v-if="showRea === 3" />
    <rea4 v-if="showRea === 4" />

  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import rea1 from "@/components/rea1.vue";
import rea2 from "@/components/rea2.vue";
import rea3 from "@/components/rea3.vue";
import rea4 from "@/components/rea4.vue";

export default {
  name: "Realisations",
  components: {
    rea1,
    rea2,
    rea3,
    rea4,
  },
  data() {
    return {
      showRea: 0,
    };
  },
  methods: {
    
  },
};
</script>
