<template>
  <section class="academic-section d-flex justify-center" :style="{ backgroundColor: $vuetify.theme.themes.dark.colors.primary }">
    <div class="academic-content d-flex align-center flex-column">
      <p class="text-h4 font-weight-light">
        {{ $t('educational') }}
      </p>
      <div class="infos d-flex align-center justify-space-around">
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

}
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
}
</style>
