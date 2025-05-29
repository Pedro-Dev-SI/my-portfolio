<template>
  <section class="academic-section d-flex justify-center" :style="{ backgroundColor: $vuetify.theme.themes.dark.colors.primary }">
    <div class="academic-content d-flex align-center flex-column">
      <p class="text-h4 font-weight-light custom-title">
        {{ $t('educational') }}
      </p>
      <div
        class="infos d-flex align-center justify-space-around"
        ref="infos"
        :class="{ 'animate-infos': infosVisible }"
      >
        <div class="institution-box">
          <p class="text-h5 font-weight-light">{{ $t('institution-header') }}</p>
          <p class="font-weight-bold">{{ $t('institution') }}</p>
        </div>
        <div class="course-box">
          <p class="text-h5 font-weight-light">{{ $t('course-header') }}</p>
          <p class="font-weight-bold">{{ $t('course') }}</p>
        </div>
        <div class="date-box">
          <p class="text-h5 font-weight-light">{{ $t('period-header') }}</p>
          <p class="font-weight-bold">{{ $t('period') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      infosVisible: false,
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.infosVisible = true;
        }
      },
      { threshold: 0.1 } // Ativa quando 10% da div é visível
    );

    observer.observe(this.$refs.infos);
  },
};
</script>

<style scoped lang="scss">
.academic-section {
  width: 100%;
  min-height: 100%;
  padding-top: 30px;
  padding-bottom: 30px;

  .academic-content {
    width: 100%;
    margin-top: 20px;

    .infos {
      width: 100%;
      margin-top: 50px;
      opacity: 0;
      transform: translateY(50px);
      transition: opacity 0.6s ease, transform 0.6s ease;

      &.animate-infos {
        opacity: 1;
        transform: translateY(0);
      }

      .institution-box, .course-box, .date-box {
        width: 30%;
        padding: 10px;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.1);
        text-align: center;
        color: white;
        font-weight: 300;
        font-size: 1.2rem;
      }
    }

  }

@media (max-width: 430px) {
  .academic-content {
    .custom-title {
      font-size: 25px!important;
    }
    .infos {
      flex-direction: column;

      .institution-box, .course-box, .date-box {
        width: 90%;
        margin-bottom: 20px;
      }
    }
  }
}
}
</style>
