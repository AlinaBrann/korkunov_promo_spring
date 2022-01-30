<template>
  <div id="app" class="loading">
    <Header v-if="showHeader" />
    <div class="app-content loading">
      <router-view />
    </div>
    <AppFooter v-if="showFooter" />
    <AppExample v-if="showExample" class="hidden-xs" />
    <Feedback />
    <ReminderPopup />
    <SuccessFeedback />
    <CommonError />
    <SuccesPopup />
    <TemporarilyUnavailable />
    <VideoPopup />
  </div>
</template>
<script>
import AppExample from "./components/AppExample.vue";
import Header from "@/components/AppHeader.vue";
import Feedback from "@/components/modals/feedback.vue";
import TemporarilyUnavailable from "@/components/modals/temporarilyUnavailable.vue";

import SuccessFeedback from "@/components/modals/successFeedback.vue";

//import UploadCheck from "@/components/modals/uploadCheck.vue";
import CommonError from "@/components/modals/commonError.vue";
import ReminderPopup from "./components/modals/reminderPopup.vue";
import SuccesPopup from "./components/modals/succesPopup.vue";
import AppFooter from "./components/AppFooter.vue";
import VideoPopup from "./components/modals/videoPopup.vue";

export default {
  components: {
    Header,
    Feedback,
    SuccessFeedback,
    CommonError,
    TemporarilyUnavailable,
    ReminderPopup,
    SuccesPopup,
    AppExample,
    AppFooter,
    VideoPopup,
  },
  data: function () {
    return {
      showHeader: true,
      showFooter: false,
      showExample: false,
      network: null,
    };
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
    setTimeout(() => {
      document.querySelector(".app-content").classList.remove("loading");
    }, 600);
  },
  watch: {
    $route: {
      handler: (to, from) => {
        document.title = to.meta.title || "";
      },
      immediate: true,
    },
    "$route.path"() {
      if (
        this.$route.path == "constructor" ||
        this.$route.path == "video-greeting"
      ) {
        this.showHeader = false;
      } else {
        this.showHeader = true;
      }
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
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  overflow: hidden;
  position: relative;
  min-width: 320px;
}

.app-content {
  opacity: 1;
  transition: opacity 0.5s;
  &.loading {
    opacity: 0;
  }
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
