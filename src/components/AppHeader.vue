<template>
  <div class="app-header d-flex align-center justify-center justify-space-around">
    <!-- Animação para a title-box -->
    <div class="title-box d-flex flex-column animated-title">
      <p class="text-h3 font-weight-light custom-intro">
        {{ $t('intro') }}
      </p>
      <h2 class="text-h1 font-weight-bold">{{ $t('main-title') }}</h2>
      <p
        :style="{ color: $vuetify.theme.themes.dark.colors.colorOrange }"
        class="text-h4 font-weight-bold custom-h5"
      >
        {{ $t('sub-title') }}
      </p>
    </div>

    <!-- Animação para a photo-box -->
    <div class="photo-box animated-photo">
      <img
        src="../assets/profile.png"
        alt="Foto Pedro"
        class="profile-photo"
      />
      <div class="gradient-overlay"></div>
    </div>
  </div>
</template>


<style lang="scss">
.app-header {
  padding: 20px;
  min-height: 100vh;
  color: #fff;
  display: flex;
  align-items: center;
}

.title-box {
  margin-bottom: 20px; // Espaço entre texto e imagem em telas pequenas
}

.photo-box {
  position: relative;
  margin-top: 50px;
  height: 730px;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-photo {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  z-index: 1;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  mix-blend-mode: multiply;
  pointer-events: none;
  z-index: 2;
}

/* Animação */
@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animated-title {
  animation: slideInLeft 1s ease-out;
}

.animated-photo {
  animation: slideInRight 1s ease-out;
}


/* Estilos responsivos */
@media (max-width: 1024px) {
  .app-header {
    flex-direction: column; // Empilha elementos
  }

  .photo-box {
    height: 500px; // Reduz tamanho da imagem
    width: 400px;
  }
}

@media (max-width: 768px) {
  .photo-box {
    height: 350px; // Ajusta ainda mais para telas menores
    width: 300px;
  }

  .title-box {
    margin-bottom: 15px;
  }

  .custom-h5 {
    font-size: 1.2rem; // Ajusta o tamanho da fonte
  }

  h2 {
    font-size: 1.8rem; // Reduz tamanho do texto
  }
}

@media (max-width: 480px) {
  .app-header {
    flex-direction: row;
    min-height: 300px!important;
    h2 {
      font-size: 30px!important; // Reduz ainda mais o tamanho do texto
    }
    .custom-intro {
      font-size: 20px!important; // Reduz ainda mais o tamanho do texto
    }
    .custom-h5 {
      font-size: 15px!important; // Reduz ainda mais o tamanho do texto
    }
  }

  .photo-box {
    height: 190px; // Reduz para telas muito pequenas
    width: 140px;
    margin-top: 0;
  }

  .custom-h5 {
    font-size: 1rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 0.9rem; // Texto menor para telas pequenas
  }
}

@media (max-width: 430px) {
  .app-header {
    flex-direction: row;
    min-height: 300px!important;
    h2 {
      font-size: 30px!important; // Reduz ainda mais o tamanho do texto
    }
    .custom-intro {
      font-size: 18px!important; // Reduz ainda mais o tamanho do texto
    }
    .custom-h5 {
      font-size: 12px!important; // Reduz ainda mais o tamanho do texto
    }
  }

  .photo-box {
    height: 190px; // Reduz para telas muito pequenas
    width: 140px;
    margin-top: 0;
  }

  .custom-h5 {
    font-size: 1rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 0.9rem; // Texto menor para telas pequenas
  }
}
</style>
