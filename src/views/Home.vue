<template>
  <full-page ref="fullpage" :options="options" id="fullpage">
    <Hero />
    <Steps />
    <AppEdadilPromo />
    <PrizesBlock type="week" />
    <PrizesBlock v-if="isMobile" type="main" />
    <AppWhereToBuy />
    <AppFaq />
    <!-- <AppWinners /> -->
    <AppFooter className="section fp-auto-height-responsive" v-if="isMobile" />
  </full-page>
</template>

<script>
import Hero from "@/components/AppHero.vue";
import Steps from "@/components/AppSteps.vue";
import PrizesBlock from "@/components/AppPrizes.vue";
import AppEdadilPromo from "../components/AppEdadilPromo.vue";
import AppWhereToBuy from "../components/AppWhereToBuy.vue";
import AppFaq from "../components/AppFaq.vue";
// import AppWinners from "../components/AppWinners.vue";
import AppFooter from "../components/AppFooter.vue";

export default {
  data: function () {
    return {
      publicPath: process.env.BASE_URL,
      isMobile: true,
      options: {
        licenseKey: "3A5AE2BE-1BFA45B0-A3D3D611-C6EE3A3D",

        fixedElements: ".header, .example,#onetrust-banner-sdk.otFlat",
        verticalCentered: false,
        fadingEffect: true,
        recordHistory: false,
        autoScrolling: true,
        menu: ".header__nav, .header__menu_mob",
        anchors: [],
        normalScrollElements:  "",
        onLeave: function (origin, destination, direction) {
          if (origin.index == 0 && direction == "down") {
            document.querySelector(".header").classList.add("_small");
          } else if (origin.index == 1 && direction == "up") {
            document.querySelector(".header").classList.remove("_small");
          }
        },
      },
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    showModal(name) {
      this.$modal.show(name);
    },
    onResize() {
      let $this = this;
      $this.isMobile = window.innerWidth < 800;
      $this.options.anchors = !$this.isMobile
        ? [
            "about",
            "steps",
            "edadil",
            "prizes",
            "where-to-buy",
            "faq",
          ]
        : [
            "about",
            "steps",
            "edadil",
            "prizes",
            "prizes-main",
            "where-to-buy",
            "faq",
            "footer"
          ];
      $this.options.normalScrollElements = !$this.isMobile
        ? ".table__inner, .example, .steps, iframe, .faq__content, .winners__inner"
        : ".table__inner, .example, iframe, .faq__content, .winners__inner";
      setTimeout(() => {
        $this.$refs.fullpage.api.reBuild();
      }, 1000);
    },
  },
  mounted() {
    let $this = this;
    this.$parent.showExample = true;
    this.$root.$on("prevSection", function () {
      $this.$refs.fullpage.api.moveSectionUp();
    });
    this.$root.$on("nextSection", function () {
      $this.$refs.fullpage.api.moveSectionDown();
    });
    window.addEventListener("resize", () => {
      this.onResize, { passive: true };
      this.onResize();
    });
  },
  created() {
    this.onResize();
  },
  components: {
    Hero,
    Steps,
    PrizesBlock,
    AppEdadilPromo,
    AppWhereToBuy,
    AppFaq,
    // AppWinners,
    AppFooter
},
};
</script>

<style lang="scss"></style>
