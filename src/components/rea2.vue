<template>
  <div class="rea2__container rea__bloc">
    <h3 class="rea2__titre">Portfolio</h3>
    <h4 class="rea2__sous-titre">Réalisation de ce portfolio avec le framework Vue JS</h4>
    <div class="rea2__technos">
      <ul class="rea2__technos__container">
        <li>HTML</li>
        <li>SCSS</li>
        <li>VueJS</li>
        <li>JavaScript</li>
      </ul>
    </div>
    <div class="rea2__description">
      <p>
        Dès la fin de la formation de Développeur Web avec Openclassrooms, j'ai décidé de construire ce portfolio.<br />
        Ce site a été conçu en utilisant le framework javascript VUE.
        En plus d'afficher mes réalisations, j'y ai aussi ajouté un formulaire de contact avec emailJS, et une page dédiée à mon CV.<br />
        Utilisation de SCSS et SASS pour la gestion du style et des @media-querries.<br />
        <br />
      </p>
    </div>
    <div class="rea2__repo">
      <a href="https://github.com/MathieuMer/Portfolio"><p>Voir le repository sur Github</p><i class="fab fa-github"></i></a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: "rea2",
  components: {},
};
</script>