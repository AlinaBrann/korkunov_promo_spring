<template>
  <Modal size="lg" name="video_popup" @closeModal="closeModal">
    <template v-slot:content>
      
      <video
        id="video"
        width="100%"
        controls
        class="example__video"
        :src="videoUrl"
        poster="../../assets/images/video-preview.jpg"
      ></video>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal.vue";

export default {
  components: {
    Modal,
  },
  data: function () {
    return {
      playing: true,
      videoUrl: null,
    };
  },
  methods: {
    closeModal(name) {
      this.$modal.hide(name);
    },
    beforeOpen(event) {
      this.videoUrl = event.params.videoUrl;
      setTimeout(() => {
        this.play();
      }, 500);
    },
    pause() {
      let videoElement = document.getElementById("video");
      videoElement.pause();
      this.playing = false;
    },
    play() {
      let videoElement = document.getElementById("video");
      videoElement.play();
      this.playing = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.video-wrapper {
  &__back {
    position: absolute;
    top: rem(25px);
    left: rem(21px);
    display: flex;
    align-items: center;
    margin-bottom: rem(17px);
    text-transform: uppercase;
    font-size: rem(10px);
    color: #fff;
    z-index: 1;
    img {
      width: rem(5px);
      margin-right: rem(9px);
    }
  }
  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
.video {
  &-trigger {
    position: absolute;
    top: rem(25px);
    right: rem(21px);
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: rem(10px);
    color: #fff;
    z-index: 1;
    span {
      margin-right: rem(10px);
    }
  }
}
#video {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
