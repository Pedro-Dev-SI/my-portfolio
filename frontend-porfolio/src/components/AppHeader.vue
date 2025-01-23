<template>
  <div class="app-header d-flex align-center justify-center justify-space-around">
    <div class="title-box d-flex flex-column">
      <p class="text-h3 font-weight-light">Oi, sou Pedro Selvate</p>
      <h2 class="text-h1 font-weight-bold">Desenvolvedor</h2>
      <p class="text-h4 font-weight-bold custom-h5">Full stack</p>
    </div>

    <div class="photo-box">
      <img src="../assets/profile.png" alt="Foto Pedro" class="profile-photo" />
      <div class="gradient-overlay"></div>
    </div>
  </div>
</template>

<style lang="scss">
.app-header {
  padding: 20px;
  min-height: 600px;
  color: #fff; // Texto branco
}

.custom-h5 {
  color: #F8971F;
}

.photo-box {
  position: relative; // Necessário para posicionar a camada do gradiente
  margin-top: 50px;
  height: 630px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-photo {
  height: 100%;
  width: 100%;
  object-fit: cover; // Garante que a imagem preencha o círculo
  border-radius: 50%; // Mantém a imagem circular
  z-index: 1; // Imagem abaixo da camada do gradiente
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  mix-blend-mode: multiply; // Mistura o gradiente com a imagem
  pointer-events: none; // Garante que o gradiente não bloqueie cliques
  z-index: 2; // Gradiente acima da imagem
}

h2 {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
