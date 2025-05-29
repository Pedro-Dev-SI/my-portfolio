<template>
  <section
    class="about-section d-flex justify-center"
    :class="{ 'visible' : isVisible }"
    ref="aboutSection"
    :style="{ backgroundColor: $vuetify.theme.themes.dark.colors.secondary }"
  >
    <div class="about-content">
      <p :style="{ color: $vuetify.theme.themes.dark.colors.colorOrange }" class="text-h4 custom-title font-weight-light">
        {{ $t('about') }}
      </p>

      <div class="stripe-container d-flex align-center justify-space-between">
        <div class="stripe stripe-left"></div>

        <div class="box-center d-flex align-center justify-center">
          <span>PS</span>
        </div>

        <div class="stripe stripe-right"></div>
      </div>

      <div class="about-container d-flex align-center justify-center justify-space-around">
        <!-- Foto com animação de surgir por baixo -->
        <div class="photo-box animated-photo">
          <img src="../assets/image.png" alt="Pedro Selvate" />
        </div>

        <!-- Container de descrição com animação de surgir por baixo -->
        <div class="about-description animated-description">
          <p class="about-title text-h4 font-weight-light">
            {{ $t('about-title') }}
          </p>
          <div class="stripe stripe-right"></div>
          <p class="text-h3 font-weight-medium description-subtitle">
            {{ $t('about-subtitle') }}
          </p>
          <p class="body-description">
            {{ $t('about-description') }}
          </p>
          <p class="body-description">
            {{ $t('about-description-second') }}
          </p>
          <v-btn class="btn-cv" :href="cvLink" download>
            {{ $t('download-cv') }}
            <v-icon class="far fa-regular fa-file ml-2"></v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </section>
</template>


<script>

import cvPath from '@/assets/docs/pedro-cv.pdf';

export default {
  data () {
    return {
      cvLink: cvPath,
      isVisible: false, // Controla a ativação da animação
    }
  },
  mounted() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isVisible = true; // Ativa a animação
          observer.disconnect(); // Desativa o observador após ativar
        }
      },
      { threshold: 0.3 } // Inicia a animação quando 30% do componente está visível
    );

    observer.observe(this.$refs.aboutSection);
  },
};
</script>

<style lang="scss" scoped>
.about-section {
  width: 100%;
  min-height: 100vh;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .custom-title {
    margin-top: 40px;
    text-align: center;
  }

  .about-content {
    width: 100%;
    margin-top: 20px;
  }

  /* Keyframes para surgirem por baixo */
  @keyframes slideInBottom {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  /* Animação para a foto */
  .animated-photo {
    animation: slideInBottom 1.2s ease-out;
  }

  /* Animação para o container de descrição */
  .animated-description {
    animation: slideInBottom 1.5s ease-out; /* Com atraso para surgirem em sequência */
  }

  .stripe-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px auto 0;
    max-width: 200px;
  }

  .stripe {
    width: 45%;
    height: 2px;
    background-color: #F8971F;
  }

  .box-center {
    width: 25px;
    height: 20px;
    background-color: #F8971F;
    color: #000;
    font-weight: bold;
    font-size: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    margin-left: 10px;
    margin-right: 10px;
  }

  .about-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 50px;

    @media screen and (max-width: 768px) {
      flex-direction: column; /* Alinha os elementos verticalmente em telas menores */
      justify-content: center;
    }
  }

  .photo-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: auto;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 45%;
    }

    @media screen and (max-width: 768px) {
      display: none; /* Remove a foto em telas menores */
    }
  }

  .about-description {
    width: 50%;
    display: flex;
    flex-direction: column;

    .description-subtitle {
      margin-top: 20px;
    }

    .body-description {
      margin-top: 20px;
      font-size: 20px;
    }

    .btn-cv {
      margin-top: 20px;
      background-color: #F8971F;
      color: #000;
      font-weight: bold;
      font-size: 18px;
      height: 45px;
      max-width: 100%; /* Alinha o botão ao máximo da largura disponível */
    }

    @media screen and (max-width: 768px) {
      width: 100%; /* Alarga o container para telas menores */
      margin-top: 40px;
      text-align: left;

      padding: 10px;

      .description-subtitle {
        font-size: 24px!important; /* Ajusta o tamanho da fonte */
      }

      .about-title {
        font-size: 24px!important; /* Ajusta o tamanho da fonte */
      }

      .body-description {
        font-size: 18px; /* Ajusta o tamanho da fonte */
      }

      .btn-cv {
        align-self: center; /* Centraliza o botão */
      }
    }
  }

  .description-subtitle {
    margin-top: 20px;
  }
}
</style>
