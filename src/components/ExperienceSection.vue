<template>
  <section class="experience-section d-flex justify-center" :style="{ backgroundColor: $vuetify.theme.themes.dark.colors.primary }">
    <div class="experience-content d-flex align-center flex-column">
      <div class="technologies-box d-flex align-center flex-column">
        <p class="text-h4 font-weight-light custom-title">
          {{ $t('technologies') }}
        </p>

        <div class="icons-box d-flex align-center justify-space-between" ref="iconsBox" :class="{ 'animate-icons-box': iconsBoxVisible }">
          <div class="tech-icon text-body-1">
            <img src="../assets/icons/HTML5.svg" alt="HTML5 Icon" width="90" height="90">
            <p>HTML5</p>
          </div>
          <div class="tech-icon text-body-1">
            <img src="../assets/icons/CSS3.svg" alt="CSS3 Icon" width="90" height="90">
            <p>CSS3</p>
          </div>
          <div class="tech-icon text-body-1">
            <img src="../assets/icons/JavaScript.svg" alt="JavaScript Icon" width="90" height="90">
            <p>JavaScript</p>
          </div>
          <div class="tech-icon text-body-1">
            <img src="../assets/icons/Java.svg" alt="Java Icon" width="90" height="90">
            <p>Java</p>
          </div>
          <div class="tech-icon text-body-1">
            <img src="../assets/icons/Vue.js.svg" alt="Vue.js Icon" width="90" height="90">
            <p>Vue.js</p>
          </div>
          <div class="tech-icon text-body-1">
            <img src="../assets/icons/React.svg" alt="React.js Icon" width="90" height="90">
            <p>React.js</p>
          </div>
          <div class="tech-icon text-body-1">
            <img src="../assets/icons/Node.js.svg" alt="Node.js Icon" width="90" height="90">
            <p>Node.js</p>
          </div>
          <div class="tech-icon text-body-1">
            <img src="../assets/icons/SpringBoot.svg" alt="Spring Boot Icon" width="90" height="90">
            <p>Spring</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProjectsSection from './ProjectsSection.vue';

export default {
  components: {
    ProjectsSection
  },
  data() {
    return {
      iconsBoxVisible: false,
      isMobile: false,
      rawJobs: [
        {
          company: 'YouX Group',
          titleKey: 'full-stack-developer',
          descriptionKey: 'youx-description',
          startDate: '02/2022',
          endDate: '',
          logoCompany: '/assets/youx-logo.jpeg',
          isFinished: false
        },
        {
          company: 'ITShare',
          titleKey: 'it-analyst',
          descriptionKey: 'it-share-description',
          startDate: '05/2021',
          endDate: '02/2022',
          logoCompany: '/assets/itshare-logo.jpeg',
          isFinished: true
        }
      ]
    }
  },
  computed: {
    jobs() {
      return this.rawJobs.map(job => ({
        ...job,
        title: this.$t(job.titleKey),
        description: this.$t(job.descriptionKey)
      }));
    }
  },
  mounted() {

    this.checkViewport();
    window.addEventListener('resize', this.checkViewport);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.iconsBoxVisible = true;
        }
      },
      { threshold: 0.1 } // Ativa quando 10% da div é visível
    );

    observer.observe(this.$refs.iconsBox);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkViewport);
  },
  methods: {
    checkViewport() {
      console.log(window.innerWidth);
      this.isMobile = window.innerWidth <= 430;
    },
  }
}
</script>

<style scoped lang="scss">
.experience-section {
  width: 100%;
  min-height: 100%;
  padding-top: 30px;

  .experience-content {
    width: 100%;
    margin-top: 20px;

    .technologies-box {
      .icons-box {
        margin-top: 40px;
        gap: 50px;
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.6s ease, transform 0.6s ease;

        &.animate-icons-box {
          opacity: 1;
          transform: translateY(0);
        }

        .tech-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
      }
    }

    .jobs-box {
      margin-top: 40px;
      width: 100%;
      padding: 24px;

      .job-timeline {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 70px;

        .timeline-item {
          margin-bottom: 20px;
        }

        .timeline-card {
          padding: 10px;
          max-width: 600px;
          margin: 0 auto;
          border-radius: 16px;
        }
      }
    }

    .unfinished-job {
      background-color: #F8971F !important;
      color: white;
      border-radius: 16px;
    }
  }

@media (max-width: 430px) {
  .experience-content {
    .technologies-box {
      .custom-title{
        font-size: 25px!important;
      }
      .icons-box {
        flex-wrap: wrap;
        gap: 12px; /* Reduz o espaço entre os ícones */
        justify-content: center; /* Centraliza os ícones */
        align-content: center;
        .tech-icon {
          width: 20%; /* Quatro ícones por linha */
          text-align: center;
          img {
            width: 40px; /* Reduz o tamanho dos ícones */
            height: 40px;
          }
          p {
            font-size: 10px; /* Reduz o texto abaixo dos ícones */
          }
        }
      }
    }

    .jobs-box {
      padding: 10px; /* Reduz padding */

      .custom-title{
        font-size: 25px!important;
        margin-bottom: 25px!important;
        margin-top: 20px!important;
      }

      .job-timeline {
        gap: 10px;

        .timeline-item {
          margin-bottom: 10px;
          .timeline-card {
            padding: 8px;
            max-width: 100vw;
            border-radius: 12px;
            .v-card-title {
              font-size: 12px; /* Reduz texto do título */
            }
            .v-card-text {
              font-size: 10px; /* Reduz texto da descrição */
            }
          }
        }

        .v-avatar {
          size: 35px; /* Diminui o tamanho do avatar */
        }
      }
    }
  }
}
}

</style>
