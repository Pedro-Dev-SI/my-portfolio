<template>
  <section class="contact-section d-flex justify-center align-center flex-column" :style="{ backgroundColor: $vuetify.theme.themes.dark.colors.primary }">
    <p class="text-h4 font-weight-light">
      {{ $t('contact') }}
    </p>
    <div class="contact-content d-flex align-center flex-column">
      <div class="social-icons d-flex ga-8">
        <a href="https://www.linkedin.com/in/pedro-selvate/" target="_blank">
          <img src="../assets/icons/LinkedIn.svg" alt="LinkedIn" width="50" height="50">
        </a>
        <a href="https://github.com/Pedro-Dev-SI" target="blank">
          <img src="../assets/icons/GitHub.svg" alt="GitHub" width="50" height="50">
        </a>
      </div>

      <v-form v-model="valid" class="custom-form" @submit.prevent="sendEmail">
        <v-container>
          <v-col class="d-flex align-center flex-column">
            <v-col cols="12" md="4">
              <p class="text-h6">{{ $t('name') }}:</p>
              <v-text-field
                v-model="firstname"
                :counter="10"
                :rules="nameRules"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <p class="text-h6">{{ $t('email') }}: </p>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <p class="text-h6">{{ $t('message') }}: </p>
              <v-textarea
                v-model="message"
                clearable
              ></v-textarea>
            </v-col>

            <v-btn class="btn-email" type="submit">
              {{ $t('send') }}
              <v-icon class="far fa-solid fa-envelope ml-2"></v-icon>
            </v-btn>
          </v-col>
        </v-container>
      </v-form>
    </div>
  </section>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      firstname: '',
      email: '',
      message: '',
      nameRules: [(v) => !!v || 'Name is required'],
      emailRules: [(v) => !!v || 'E-mail is required', (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
      valid: false,
    };
  },
  methods: {
    sendEmail() {
      if (!this.valid) {
        alert('Please fill all required fields!');
        return;
      }

      const templateParams = {
        to_name: 'Pedro Selvate',
        from_name: this.firstname,
        from_email: this.email,
        message: this.message,
      };

      emailjs
        .send('service_zhtp0hg', 'template_1e0qp7v', templateParams, 'DaBlSSubuBqMtfppK')
        .then(
          () => {
            alert('Email sent successfully!');
            this.firstname = '';
            this.email = '';
            this.message = '';
          },
          (error) => {
            alert('Failed to send email: ' + error.text);
          }
        );
    },
  },
};
</script>

<style scoped lang="scss">
.contact-section {
  width: 100%;
  min-height: 100%;
  padding-top: 30px;
  padding-bottom: 30px;

  .contact-content {
    width: 100%;
    margin-top: 40px;

    .custom-form {
      width: 100%;
      margin-top: 5px;

      .btn-email {
        width: 32%;
        height: 50px;
        background-color: #F8971F;
      }
    }
  }
}
</style>
