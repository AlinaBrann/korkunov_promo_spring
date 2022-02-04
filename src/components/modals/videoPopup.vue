<template>
  <Modal size="lg" name="video_popup" @closeModal="closeModal">
    <template v-slot:content>
      
      <video
        id="video"
        width="100%"
        controls
        class="example__video"
        src="https://291030.selcdn.ru/korkunov2022/preview.mp4"
        poster="../../assets/images/video-preview.png"
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
    };
  },
  methods: {
    closeModal(name) {
      this.$modal.hide(name);
    },
    beforeOpen() {
      setTimeout(() => {
        this.play()
      }, 1000);
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
<style lang="scss" >
.video {
  &-back {
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
