<template>
  <div class="email-form">
    <InputText
      placeholder="E-mail"
      class="email-form__input"
      :field="email"
      @input="email = $event"
      :class="{
        error: validationStatus($v.email) || this.errorMessage.email,
      }"
      :error="
        (!$v.email.required && $v.email.$error
          ? 'Обязательное поле'
          : !$v.email.email && $v.email.$error
          ? 'Некорректный e-mail'
          : '') || this.errorMessage.email
      "
    />
    <button class="btn btn--send email-form__button"></button>
  </div>
</template>

<script>
import InputText from "./inputText.vue";
import { required, email } from "vuelidate/lib/validators";
export default {
  data: () => ({
    email: null,
    errorMessage: {
      email: null,
      name: null,
      message: null,
    },

    submitStatus: null,
  }),
  validations: {
    email: { required, email },
  },

  methods: {
    errorReset() {
      this.$v.$reset();

      this.errorMessage = {
        email: null,
      };
    },

    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },

    submit() {
      console.log("submit");
      this.$v.$touch();

      if (this.$v.$pendding || this.$v.$error) return;

      if (this.submitStatus !== "PENDING") {
        this.submitStatus = "PENDING";

        this.$store
          .dispatch("SendFeedback", {
            email: this.email,
          })
          .then((r) => {
            console.log(r);
            if (r.error !== 0) {
              this.submitStatus = null;

              this.$refs.recaptcha.reset();
              this.captcha = null;

              let fieldsError = null;

              if (r.message && r.message.email) {
                [this.errorMessage.email] = r.message.email;
                fieldsError = true;
              } else if (r.message && r.message.login) {
                [this.errorMessage.email] = r.message.login;
                fieldsError = true;
              }
            } else {
              this.submitStatus = null;
              this.$modal.show("succes_popup", {
                text: "Мы оповестим Вас о начале акции.",
              });
            }
          })
          .catch(() => {
            this.submitStatus = null;
          });
      }
    },
  },
  components: { InputText },
};
</script>

<style lang="scss" scoped>
.email-form {
  position: relative;
  display: flex;
  align-items: center;
  width: rem(500px);
  max-width: 100%;
  margin: rem(14px) auto 0;
  z-index: 1;
  &__input {
    flex: auto;
    margin-bottom: 0;
  }
  &__button {
    margin-left: rem(-7px);
  }
  @media (min-width: $sm) {
    margin: rem(54px) auto 0;
  }
}
</style>
