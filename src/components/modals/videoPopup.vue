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
    return {};
  },
  methods: {
    closeModal(name) {
      this.$modal.hide(name);
    },
    beforeOpen() {
      setTimeout(() => {
        document.getElementById("video").play();
      }, 1000);
    },
  },
};
</script>
