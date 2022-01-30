<template>
  <constructor-step
    title="шаг 5. данные для получения статуса модерации"
    back="Вернуться назад"
  >
    <inputText
      label="Ваш E-mail"
      color="white"
      placeholder="example@email.com"
      :field="sender"
      tooltip="На&nbsp;указанный E-mail будет отправлена информация о&nbsp;статусе модерации"
      @input="sender = $event"
      :class="{
        error: validationStatus($v.sender) || this.errorMessage.nsenderame,
      }"
      :error="
        (!$v.sender.required && $v.sender.$error ? 'Обязательное поле' : '') ||
        this.errorMessage.name
      "
    />
    <div class="constructor-step__video-wrapper">
      <video
        class="constructor-step__video"
        src=""
        poster="../../assets/images/constructor/poster.png"
      ></video>
      <div class="constructor-step__video-overlay"></div>
    </div>
    <button
      type="button"
      @click="goToNext()"
      class="constructor-step__button btn btn--bordered"
    >
      продолжить
    </button>
    <button
      type="button"
      @click="goToNext(2)"
      class="constructor-step__button btn btn--no-border"
    >
      перезаписать поздравление
    </button>
  </constructor-step>
</template>

<script>
import InputText from "../form/inputText.vue";
import ConstructorStep from "../ConstructorStep.vue";
import { required } from "vuelidate/lib/validators";

export default {
  data: () => ({
    sender: null,
    errorMessage: {
      sender: null,
    },
  }),
  validations: {
    sender: { required },
  },
  methods: {
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    errorReset() {
      this.$v.$reset();

      this.errorMessage = {
        sender: null,
      };
    },
    goToNext(val) {
      this.$root.$emit("nextStep", val);
    },
  },
  components: { ConstructorStep, InputText },
};
</script>

<style lang="scss" scoped></style>
