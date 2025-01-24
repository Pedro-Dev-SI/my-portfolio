<template>
  <section class="about-section d-flex justify-center" :style="{ backgroundColor: $vuetify.theme.themes.dark.colors.secondary }">
    <div class="about-content">
      <p :style="{ color: $vuetify.theme.themes.dark.colors.colorOrange }" class="text-h4 custom-title font-weight-light">
        {{ $t('about') }}
      </p>

      <div class="stripe-container d-flex align-center justify-space-between">
        <div  class="stripe stripe-left"></div>

        <div class="box-center d-flex align-center justify-center">
          <span>PS</span>
        </div>

        <div class="stripe stripe-right"></div>
      </div>

      <div class="about-container d-flex align-center justify-center justify-space-around">
        <div class="photo-box">
          <img src="../assets/image.png" alt="Pedro Selvate">
        </div>
        <div class="about-description">
          <p class="text-h4 font-weight-light">
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
            <v-icon class="far fa-regular fa-file ml-2" ></v-icon>
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
      cvLink: cvPath
    }
  }
};
</script>

<style lang="scss">
.about-section {
  width: 100%;
  min-height: 600px;

  .custom-title {
    margin-top: 40px;
    text-align: center;
  }

  .about-content {
    width: 100%;
    margin-top: 20px;
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
    margin-bottom: 50px;
  }

  .photo-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 10%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 45%;
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
      font-size: 20px;
      height: 50px;
      max-width: 50%;
    }
  }

  .description-subtitle {
    margin-top: 20px;
  }
}
</style>
