<template>
  <constructor-step
    title="шаг 5. данные для получения статуса модерации"
    back="Вернуться назад"
  >
    
    <div class="constructor-step__video-wrapper">
      <video
        class="constructor-step__video"
        src=""
        poster="../../assets/images/constructor/poster.png"
      ></video>
      <div @click="showVideoPopup()" class="constructor-step__video-overlay"></div>
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
import ConstructorStep from "../ConstructorStep.vue";

export default {
  data: () => ({

  }),
  methods: {
    showVideoPopup() {
      this.$modal.show("video_popup", {
        videoUrl: this.$store.getters.video_url,
      });
    },
    goToNext(val) {
      this.$root.$emit("nextStep", val);
    },
  },
  components: { ConstructorStep },
};
</script>

<style lang="scss" scoped></style>
