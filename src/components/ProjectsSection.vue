<template>
  <section class="projects-section d-flex justify-center" :style="{ backgroundColor: $vuetify.theme.themes.dark.colors.primary }">
    <div class="projects-content d-flex align-center flex-column">
      <p class="text-h4 font-weight-light custom-title">
        {{ $t('projects') }}
      </p>
      <div class="projects-list d-flex flex-wrap justify-center">
        <div v-for="project in projects" :key="project.id" class="project-card elevation-2">
          <img :src="project.image" :alt="project.title" class="project-image" />
          <div class="project-info">
            <h3 class="project-title">{{ $t(project.titleKey) }}</h3>
            <p class="project-description">{{ $t(project.descriptionKey) }}</p>
            <div class="project-links d-flex align-center ga-4">
              <a v-if="project.demo" :href="project.demo" target="_blank" class="project-link demo">Live</a>
              <a v-if="project.github" :href="project.github" target="_blank" class="project-link github">
                <img src="@/assets/icons/GitHub.svg" alt="GitHub" width="24" height="24" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import projects from '@/mocks/projects.mock.js';

export default {
  name: 'ProjectsSection',
  data() {
    return {
      projects
    };
  }
};
</script>

<style scoped lang="scss">
.projects-section {
  width: 100%;
  min-height: 100%;
  padding-top: 30px;
  padding-bottom: 30px;

  .projects-content {
    width: 100%;
    margin-top: 20px;

    .custom-title {
      color: #F8971F;
      margin-bottom: 40px;
      text-align: center;
    }

    .projects-list {
      width: 100%;
      gap: 32px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .project-card {
      background-color: #313131;
      border-radius: 16px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      width: 340px;
      margin: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: hidden;
      transition: transform 0.2s;
      &:hover {
        transform: translateY(-8px) scale(1.03);
        box-shadow: 0 8px 24px rgba(0,0,0,0.25);
      }
      .project-image {
        width: 100%;
        height: 180px;
        object-fit: cover;
        background: #222;
      }
      .project-info {
        padding: 20px;
        width: 100%;
        .project-title {
          color: #F8971F;
          font-size: 1.3rem;
          margin-bottom: 10px;
        }
        .project-description {
          color: #fff;
          font-size: 1rem;
          margin-bottom: 16px;
        }
        .project-links {
          gap: 12px;
          .project-link {
            color: #F8971F;
            text-decoration: none;
            font-weight: 500;
            &.github img {
              vertical-align: middle;
            }
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 900px) {
  .projects-content .projects-list {
    flex-direction: column;
    align-items: center;
  }
  .project-card {
    width: 90vw !important;
    max-width: 400px;
  }
}
</style> 