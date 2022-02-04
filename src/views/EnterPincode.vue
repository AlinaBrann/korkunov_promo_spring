<template>
  <constructor-step
    title="посмотреть <br>видеопоздравление"
    back="назад"
    :routeBack="backTo"
  >
    <div class="constructor-step__field-block">
      <div class="constructor-step__text">
        {{
          "Для просмотра поздравления введите пин-код, полученный от отправителя"
            | typograf
        }}
      </div>
      <p>Введите 8-значный пин-код</p>
      <div class="constructor-step__field-wrapper">
        <input
          class="constructor-step__field-code"
          id="code"
          v-model="code"
          placeholder="Пин-код"
          required
        />
        <div
          v-if="validationStatus($v.code)"
          class="error-hint"
          v-html="
            !$v.code.required && $v.code.$error ? 'Обязательное поле' : ''
          "
        ></div>
      </div>
    </div>

    <button
      @click="submit()"
      class="constructor-step__button btn btn--bordered"
    >
      продолжить
    </button>
  </constructor-step>
</template>

<script>
import ConstructorStep from "../components/ConstructorStep.vue";
import { required } from "vuelidate/lib/validators";

export default {
  data: () => ({
    code: null,
    submitStatus: null,
    backTo: null
  }),
  validations: {
    code: { required },
  },

  methods: {
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    submit() {
      this.$v.$touch();

      if (this.$v.$pendding || this.$v.$error) return;

      if (this.submitStatus !== "PENDING") {
        this.submitStatus = "PENDING";

        this.$store
          .dispatch("ViewCongratulation", {
            code: this.code,
          })
          .then((r) => {
            console.log(r);
            if (r.error != 0) {
              this.submitStatus = null;
              this.$modal.show("common_error", {
                text: "Что-то пошло не так, " + r.message.common[0],
              });
            } else {
              this.submitStatus = null;
              this.$router.push({
                path: "/greeting-preview?pincode=" + this.code,
                params: {
                  backTo: '/enter-code'
                }
              });
            }
          })
          .catch((e) => {
            this.submitStatus = null;
            this.$modal.show("common_error", {
              text: "Что-то пошло не так, " + e,
            });
          });
      }
    },
  },
  mounted() {
    this.backTo = this.$route.params.backTo || '/'
  },
  components: { ConstructorStep },
};
</script>

<style lang="scss" scoped></style>
