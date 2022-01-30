<template>
  <transition name="fade">
    <ConstructorIntro v-if="currentStep == 0" />
    <ConstructorStep1 v-else-if="currentStep == 1" />
    <ConstructorStep2 v-else-if="currentStep == 2" :video="videoUrl" />
    <ConstructorStep3 v-else-if="currentStep == 3" />
    <ConstructorStep4 v-else-if="currentStep == 4" />
    <ConstructorStep5 v-else-if="currentStep == 5" />
    <ConstructorStep6 v-else-if="currentStep == 6" />
  </transition>
</template>

<script>
import ConstructorStep6 from "../components/constructor/ConstructorStep6.vue";
import ConstructorStep5 from "../components/constructor/ConstructorStep5.vue";
import ConstructorStep4 from "../components/constructor/ConstructorStep4.vue";
import ConstructorStep3 from "../components/constructor/ConstructorStep3.vue";
import ConstructorStep2 from "../components/constructor/ConstructorStep2.vue";
import ConstructorStep1 from "../components/constructor/ConstructorStep1.vue";
import ConstructorIntro from "../components/constructor/ConstructorIntro.vue";
import { isMobile } from "../utils/device";

export default {
  data: () => ({
    currentStep: 0,
    videoUrl: null,
    congratulation_id: null,
    sender_name: null,
    sender_email: null,
    recipient_email: null,
    recipient_name: null,
  }),
  methods: {},
  mounted() {
    this.$root.$on("goBack", () => {
      if (this.currentStep > 0) {
        this.currentStep -= 1;
      }
    });
    this.$root.$on("nextStep", (value) => {
      if (!this.finish && !value) {
        this.currentStep += 1;
      } else if (value) {
        this.currentStep = value;
      }
    });
    this.$root.$on("setVideoUrl", (value) => {
      this.videoUrl = value;
      console.log(this.videoUrl);
    });
    this.$root.$on(
      "formData",
      (sender_name, sender_email, recipient_email, recipient_name) => {
        this.sender_name = sender_name;
        this.sender_email = sender_email;
        this.recipient_email = recipient_email;
        this.recipient_name = recipient_name;
        console.log(this.sender_name);
      }
    );
  },
  created() {
    if (!isMobile()) {
      this.$router.push("/placeholder");
    }
  },
  components: {
    ConstructorIntro,
    ConstructorStep1,
    ConstructorStep2,
    ConstructorStep3,
    ConstructorStep4,
    ConstructorStep5,
    ConstructorStep6,
  },
};
</script>

<style lang="scss" scoped></style>
