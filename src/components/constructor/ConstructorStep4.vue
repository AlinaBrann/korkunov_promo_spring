<template>
  <constructor-step
    title="шаг 4. информация <br>о получателе"
    back="Вернуться назад"
  >
    <inputText
      label="Кому видеопоздравление"
      placeholder="Ваше имя"
      :field="sender"
      tooltip="Впишите обращение к&nbsp;получателю в&nbsp;дательном падеже, например: Тамаре, Маме, Любимой. Текст будет указан на&nbsp;открытке в&nbsp;видеопоздравлении"
      @input="sender = $event"
      :class="{
        error: validationStatus($v.sender) || this.errorMessage.nsenderame,
      }"
      :error="
        (!$v.sender.required && $v.sender.$error ? 'Обязательное поле' : '') ||
        this.errorMessage.name
      "
    />
    <Select
      labelText="Имя адресата"
      tooltip="Нажмите, чтобы выбрать. Имя или обращение в видео будет произносить Сергей Безруков"
      placeholder="Выберите имя/обращение"
      :options="[
        { id: 1, label: 'Выберите имя/обращение' },
        { id: 2, label: 'Выберите имя/обращение' },
        { id: 3, label: 'Выберите имя/обращение' },
        { id: 4, label: 'Выберите имя/обращение' },
        { id: 5, label: 'Выберите имя/обращение' },
        { id: 6, label: 'Другое' },
      ]"
      field="Выберите имя/обращение"
      @input="name = $event.id"
      :class="{
        error: validationStatus($v.subject) || this.errorMessage.name,
      }"
      :error="
        (!$v.name.required && $v.name.$error ? 'Обязательное поле' : '') ||
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
import Select from "../form/inputSelect.vue";
import { required } from "vuelidate/lib/validators";

export default {
  data: () => ({
    sender: null,
    errorMessage: {
      sender: null,
      name: null,
    },
  }),
  validations: {
    sender: { required },
    name: { required },
  },
  methods: {
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    errorReset() {
      this.$v.$reset();

      this.errorMessage = {
        sender: null,
        name: null,
      };
    },
    goToNext() {
      this.$root.$emit("nextStep");
    },
  },
  components: { ConstructorStep, InputText, Select },
};
</script>

<style lang="scss" scoped></style>
