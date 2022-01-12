<template>
  <Modal name="reminder__popup" size="md" @closeModal="closeModal">
    <template v-slot:content>
      <div class="success_modal">
        <div class="modal__subtitle">
          Оставьте Ваш e-mail, <br />чтобы получить напоминание
          <br />о&nbsp;старте акции
        </div>
        <EmailForm />
      </div>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal.vue";
import EmailForm from "../form/emailForm.vue";

export default {
  components: {
    Modal,
    EmailForm,
  },
  data: function () {
    return {};
  },
  methods: {
    closeModal(name) {
      this.$modal.hide(name);
    },
    beforeOpen() {},
  },
};
</script>
