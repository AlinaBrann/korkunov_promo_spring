<template>
  <full-page ref="fullpage" :options="options" id="fullpage">
    <Hero />
    <Steps />
    <AppEdadilPromo />
    <PrizesBlock type="week"/>
    <PrizesBlock v-if="isMobile" type="main"/>
  </full-page>
</template>

<script>
import Hero from "@/components/AppHero.vue";
import Steps from "@/components/AppSteps.vue";
import PrizesBlock from "@/components/AppPrizes.vue";
import AppEdadilPromo from "../components/AppEdadilPromo.vue";

export default {
  data: function () {
    return {
      publicPath: process.env.BASE_URL,
      isMobile: true,
      options: {
        licenseKey: "3A5AE2BE-1BFA45B0-A3D3D611-C6EE3A3D",
        
        fixedElements: ".header, .example",
        verticalCentered: false,
        fadingEffect: true,
        recordHistory: false,
        autoScrolling: true,
        menu: ".header__nav, .header__menu_mob",
        anchors: [],
        normalScrollElements: ".footer, .table__inner, .example, .steps, iframe",
        onLeave: function(origin, destination, direction){
          if(origin.index == 0 && direction =='down'){
            document.querySelector('.header').classList.add('_small')
          } else if(origin.index == 1 && direction =='up'){
            document.querySelector('.header').classList.remove('_small')
          }
        }
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
      $this.options.anchors = !$this.isMobile ? ["about", "steps", "edadil", "prizes"] : ["about", "steps", "edadil", "prizes", "prizes-main"]
      $this.options.normalScrollElements = !$this.isMobile ? ".footer, .table__inner, .example, .steps" : ".footer, .table__inner, .example"
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
    this.onResize();
    window.addEventListener("resize", () => {
      this.onResize, { passive: true }
      this.onResize();
    }
      
    );
    
  },
  components: {
    Hero,
    Steps,
    PrizesBlock,
    AppEdadilPromo,
  },
};
</script>

<style lang="scss"></style>
