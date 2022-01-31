<template>
  <constructor-step
    title="посмотреть <br>видеопоздравление"
    back="назад"
    routeBack="/video-greeting"
  >
    <div class="constructor-step__pincode-block">
      <div class="constructor-step__text">
        {{
          "Для просмотра поздравления введите пин-код, полученный от отправителя"
            | typograf
        }}
      </div>
      <p>Введите 8-значный пин-код</p>
      <div class="constructor-step__pincode-wrapper">
        <input
          class="constructor-step__pincode-code"
          id="code"
          v-model="code"
          placeholder="Пин-код"
          required
        />
      </div>
    </div>

    <router-link
      :to="{ path: '/greeting-preview?pincode=' + code }"
      class="constructor-step__button btn btn--bordered"
    >
      продолжить
    </router-link>
  </constructor-step>
</template>

<script>
import ConstructorStep from "../components/ConstructorStep.vue";
export default {
  data: () => ({
    code: null,
  }),
  methods: {},
  mounted() {},
  components: { ConstructorStep },
};
</script>

<style lang="scss" scoped></style>
