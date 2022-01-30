<template>
  <constructor-step
    title="шаг 3. информация об отправителе"
    back="Вернуться назад"
  >
    <inputText
      label="от кого видеопоздравление"
      color="white"
      placeholder="Ваше имя"
      :field="sender"
      tooltip="Впишите свое имя в&nbsp;родительном падеже, например: (от) Маши. Текст будет указан на&nbsp;открытке в&nbsp;видеопоздравлении"
      @input="sender = $event"
      :class="{
        error: validationStatus($v.sender) || this.errorMessage.nsenderame,
      }"
      :error="
        (!$v.sender.required && $v.sender.$error ? 'Обязательное поле' : '') ||
        this.errorMessage.name
      "
    />
    <button
      type="button"
      @click="goToNext()"
      class="constructor-step__button btn btn--bordered"
    >
      продолжить
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
    goToNext() {
      this.$v.$touch();
      if (this.$v.$error) return;
      let data = {
        sender_name: this.sender,
      };
      this.$root.$emit("formData", data);

      this.$root.$emit("nextStep");
    },
  },
  components: { ConstructorStep, InputText },
};
</script>

<style lang="scss" scoped></style>
