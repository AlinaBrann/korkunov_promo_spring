<template>
  <constructor-step
    title="шаг 2. предпросмотр видеопоздравления"
    back="выбрать другой фон"
  >
    <div class="constructor-step__video-wrapper">
      <video
        class="constructor-step__video"
        src=""
        poster="../../assets/images/constructor/poster.png"
      ></video>
      <!-- <router-link :to="{ name:'VideoPage', params: { video: video }}" class="constructor-step__video-overlay"></router-link> -->
      <div
        @click="showVideoPopup()"
        class="constructor-step__video-overlay"
      ></div>
    </div>
    <transition name="fade">
      <button
        v-if="!showOptions"
        class="constructor-step__button btn btn--bordered"
        @click="showOptions = true"
      >
        Создать поздравление!
      </button>
      <div v-else class="constructor-step__first-options">
        <p class="constructor-step__first-options-text">
          Хотите сделать видеопоздравление персональным?
        </p>
        <button
          @click="goToNext()"
          class="constructor-step__first-options-btn btn btn--no-border"
        >
          Да
        </button>
        <button
          @click="completeCongratulation()"
          class="constructor-step__first-options-btn btn btn--no-border"
        >
          Нет
        </button>
        <small
          ><sup>*</sup> Имена отправителя и получателя будут отображены на
          открытке в видеопоздравлении
        </small>
      </div>
    </transition>
    <!-- <button
      
      class="constructor-step__button btn btn--bordered"
      @click="completeCongratulation()"
    >
      Создать поздравление!
    </button> -->
  </constructor-step>
</template>

<script>
import ConstructorStep from "../ConstructorStep.vue";
export default {
  props: ["video"],
  data: () => ({
    showOptions: true,
    radio: null,
    submitStatus: null,
  }),
  methods: {
    goToNext() {
      this.$root.$emit("nextStep");
      this.$store.commit("CHANGE_PRIVATE", 1);
    },
    showVideoPopup() {
      this.$modal.show("video_popup", {
        videoUrl: this.$store.getters.video_url,
      });
    },
    completeCongratulation() {

      if (this.submitStatus !== "PENDING") {
        this.submitStatus = "PENDING";
        this.$store
          .dispatch("CompleteCongratulation", {
            congratulation_id: this.$store.getters.congratulation_id,
            private: 0,
          })
          .then((r) => {
            console.log(r);
            if (r.error != 0) {
              this.submitStatus = null;

              this.$modal.show("common_error", {
                text: "Что-то пошло не так, " + r.message.common,
              });
            } else {
              this.submitStatus = null;
              this.$store.commit("CHANGE_PINCODE", r.pin);
              this.$router.push({
                name: "VideoGreeting",
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
  components: { ConstructorStep },
};
</script>

<style lang="scss" scoped>
.constructor-step {
  &__first-options {
    display: flex;
    flex-direction: column;
    flex: auto;
    text-align: center;
    &-text {
      margin-bottom: rem(23px);
    }
    &-btn {
      margin-bottom: rem(10px);
      font-size: rem(12px);
      line-height: rem(36px);
      font-family: "Bold";
      text-transform: uppercase;
      height: rem(36px);
    }
  }
  small {
    display: block;
    margin-top: auto;
  }
}
</style>
