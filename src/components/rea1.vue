<template>
  <div class="rea1__container rea__bloc">
    <h3 class="rea1__titre">Réseau Social d'entreprise: Groupomania</h3>
    <h4 class="rea1__sous-titre">Conception Front-end et Back-end</h4>
    <img class="rea1__logo" src="../assets/images/reas/rea1-icon-left-font-monochrome-white2.png" alt="logo groupomania">
    <div class="rea1__technos">
      <ul class="rea1__technos__container">
        <li>HTML</li>
        <li>SCSS</li>
        <li>VueJS</li>
        <li>NodeJS</li>
        <li>MySQL</li>
        <li>BootstrapVue</li>
      </ul>
    </div>
    <div class="rea1__description">
      <p>
        Dernier projet du parcours Développeur Web
        d'Openclassrooms, consistant à développer entièrement la MVP d'un
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
          <li>Poster un message texte et/ou image</li>
          <li>Preview du post avant envoi</li>
          <li>Edition et suppression du message par son auteur</li>
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
        Technologies utilisées :<br />
        <br />
        La partie backend du projet est conçu avec NodeJS / Express.<br />
        Pour le frontend, j'ai utilisé le framework VueJS, avec VueX et Vue
        router.<br />
        La base de données MySQL a été créée en utilisant l'ORM Sequelize.<br />
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
            <img src="..\assets\images\reas\rea1-login.jpg" class="d-block" alt="page login groupomania" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Page d'accueil</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img src="..\assets\images\reas\rea1-timeline.jpg" class="d-block" alt="timeline groupomania" />
            <div class="carousel-caption d-none d-md-block">
              <h5 class="black-color">Timeline</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/images/reas\rea1-tables.jpg" class="d-block" alt="tables mySQL" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Base de données mySQL</h5>
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
    <div class="rea1__repo">
      <a href="https://github.com/MathieuMer/Projet_7_Groupomania"><p>Voir le repository sur Github</p><i class="fab fa-github"></i></a>
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