<template>
  <div id="app">
    <div class="app-content">
      <router-view />
    </div>
    <CommonError />
    <SuccesPopup />
    <TemporarilyUnavailable />
    <VideoPopup />
  </div>
</template>
<script>
import TemporarilyUnavailable from "@/components/modals/temporarilyUnavailable.vue";

//import UploadCheck from "@/components/modals/uploadCheck.vue";
import CommonError from "@/components/modals/commonError.vue";
import SuccesPopup from "./components/modals/succesPopup.vue";
import AppFooter from "./components/AppFooter.vue";
import VideoPopup from "./components/modals/videoPopup.vue";

export default {
  components: {
    CommonError,
    TemporarilyUnavailable,
    SuccesPopup,
    VideoPopup,
  },
  data: function () {
    return {};
  },
  methods: {
    checkAuth(t) {
      if (this.$store.getters.token) {
        if (!this.$store.getters.user) {
          this.$store.dispatch("GetProfile").then((response) => {
            if (response.error != 0) {
              if (this.$route.path !== "/") {
                this.$router.push("/");
              }
            } else {
              setTimeout(function () {
                t.apmInit = true;
              }, 1000);
            }
          });
        }
      }
    },
    setHeight() {
      var vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    },
  },
  mounted() {
    let t = this;

    clearImmediate;
    this.checkAuth(t);
    // this.$modal.show("reminder__popup");
    this.setHeight();
    window.addEventListener("resize", this.setHeight);
  },
  watch: {
    $route: {
      handler: (to, from) => {
        document.title = to.meta.title || "";
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Light";
  src: url("./assets/fonts/AvenirNextCyr-Light.woff") format("woff"),
    url("./assets/fonts/AvenirNextCyr-Light.eot") format("eot"),
    url("./assets/fonts/AvenirNextCyr-Light.ttf") format("ttf");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Demi";
  src: url("./assets/fonts/AvenirNextW1G-Demi.woff") format("woff"),
    url("./assets/fonts/AvenirNextW1G-Demi.eot") format("eot"),
    url("./assets/fonts/AvenirNextW1G-Demi.ttf") format("ttf");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Bold";
  src: url("./assets/fonts/AvenirNextCyr-Bold.woff") format("woff"),
    url("./assets/fonts/AvenirNextCyr-Bold.eot") format("eot"),
    url("./assets/fonts/AvenirNextCyr-Bold.ttf") format("ttf");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Magnolia";
  src: url("./assets/fonts/Magnolia-Script.woff") format("woff"),
    url("./assets/fonts/Magnolia-Script.eot") format("eot"),
    url("./assets/fonts/Magnolia-Script.ttf") format("ttf");
  font-weight: normal;
  font-style: normal;
}

.app-content {
  flex: 1;
  z-index: 1;
  @media (min-width: 640px) {
    display: flex;

    & > div {
      flex: 1;
    }
  }
}

#app {
  display: flex;
  flex-direction: column;
  min-height: calc(var(--vh, 1vh) * 100);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  overflow-x: hidden;
  position: relative;
  min-width: 320px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
