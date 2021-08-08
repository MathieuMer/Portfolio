<template>
  <div class="rea3__container rea__bloc">
    <h3 class="rea3__titre">Application de restauration: Ohmyfood</h3>
    <h4 class="rea3__sous-titre">Création du Front-end à partir de maquettes</h4>
    <div class="rea3__technos">
      <ul class="rea3__technos__container">
        <li>HTML</li>
        <li>SCSS</li>
        <li>Animations CSS</li>
      </ul>
    </div>
    <div class="rea3__description">
      <p>
        Troisième projet du parcours Développeur Web d'Openclassrooms, découverte de Sass, et premières animations CSS.
        <br />
        <br />
      </p>
    </div>
    <div class="rea3__caroussel">
      <div
        id="carouselRea3"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselRea3"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselRea3"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselRea3"
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
          data-bs-target="#carouselRea3"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselRea3"
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
  name: "rea3",
  components: {},
};
</script>