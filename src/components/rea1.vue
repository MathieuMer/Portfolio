<template>
  <div class="rea1__container rea__bloc">
    <h3 class="rea1__titre">Réseau Social d'entreprise: Groupomania</h3>
    <h4 class="rea1__sous-titre">Conception Front-end et Back-end</h4>
    <div class="rea1__technos">
      <ul class="rea1__technos__container">
        <li>HTML</li>
        <li>CSS</li>
        <li>SCSS</li>
        <li>VueJS</li>
        <li>NodeJS</li>
        <li>MySQL</li>
      </ul>
    </div>
    <div class="rea1__description">
      <p>
        Ce projet était le dernier projet du parcours Développeur Web
        d'Openclassrooms, qui consistait à développer entièrement la MVP d'un
        réseau social d'entreprise. A partir d'un cahier des charges, il a fallu
        respecter les besoins du client, dont le but était principalement
        d'améliorer l'ambiance et les relations entres tous les employés de
        l'entreprise.
        <br />
        <br />
        Fonctionnalitées implémentées :
        <br />
        <br />
      </p>
      <div class="rea1__description__listes">
        <ul>
          <li>Création de compte / Login</li>
          <li>Poster un message texte et/ou image sur la Timeline publique</li>
          <li>Preview du post avant envoi</li>
          <li>Edition du message par son auteur</li>
        </ul>
        <ul>
          <li>Système de commentaires</li>
          <li>Système de signalements des messages et commentaires</li>
          <li>Panneau de modération pour les utilisateurs ayant les droits</li>
          <li>Possibilité de supprimer son compte</li>
        </ul>
      </div>
      <p>
        <br />
        La partie backend du projet est conçu avec NodeJS / Express.<br />
        Pour le frontend, j'ai utilisé le framework VueJS, avec VueX et Vue
        router.<br />
        La base de données MySQL a été crée en utilisant l'ORM Sequelize.<br />
        Utilisation de la bibliothèque Axios pour les appels API.
      </p>
    </div>
    <div class="rea1__caroussel">
      <div
        id="carouselRea1"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselRea1"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselRea1"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselRea1"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/images/css.png" class="d-block" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/images/nodejs.png" class="d-block" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Node JS</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/images/html.png" class="d-block" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselRea1"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselRea1"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: "rea1",
  components: {},
};
</script>