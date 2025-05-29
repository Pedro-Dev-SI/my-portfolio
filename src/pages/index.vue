<template>
  <div>
    <!-- Selector de Idiomas -->
    <div class="language-selector">
      <button @click="changeLanguage('pt')" :class="{ active: currentLanguage === 'pt' }">PT</button>
      <button @click="changeLanguage('en')" :class="{ active: currentLanguage === 'en' }">EN</button>
    </div>

    <!-- Cabeçalho da Aplicação -->
    <AppHeader />

    <!-- Conteúdo Principal -->
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <AcademicSection />
    <ContactSection />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'; // Importa o composable do i18n
import AppHeader from '@/components/AppHeader.vue'; // Importa o cabeçalho

// Usa o i18n
const { locale } = useI18n(); // `t` para traduções, `locale` para o idioma atual

// Computed para obter o idioma atual
const currentLanguage = locale;

// Função para trocar o idioma
function changeLanguage(lang) {
  locale.value = lang; // Atualiza o idioma da aplicação
}
</script>

<style lang="scss">
.language-selector {
  position: fixed; /* Mantém os botões fixos no topo */
  top: 20px; /* Espaçamento do topo */
  right: 20px; /* Espaçamento da direita */
  z-index: 1000; /* Garante que os botões fiquem acima de outros elementos */
  top: 20px;
  right: 20px;
  display: flex;
  gap: 10px;

  button {
    background: none;
    border: 1px solid white;
    color: white;
    padding: 5px 10px;
    cursor: pointer;
    transition: all 0.3s ease;

    &.active {
      background: white;
      color: black;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.8);
      color: black;
    }
  }
}
</style>
