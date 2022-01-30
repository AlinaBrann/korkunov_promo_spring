<template>
  <label class="form-textarea">
    <div class="form-textarea__caption" v-if="label">{{ label }}</div>
    <textarea
      class="form-textarea__field"
      :placeholder="placeholder"
      v-model.trim="retValue"
      :name="name"
      @focus="errorReset()"
      @input="onInput()"
      @blur="onBlur()"
    ></textarea>

    <div class="error-hint" v-if="error">{{ error }}</div>
  </label>
</template>
<script>
export default {
  data() {
    return {
      retValue: this.field,
      nameValue: this.name || "",
    };
  },
  methods: {
    errorReset() {
      this.$parent.errorReset();
    },

    onInput() {
      this.$emit("input", this.retValue);
    },

    onBlur() {
      this.$emit("input", this.retValue);
    },
  },
  props: {
    field: String,
    name: String,
    label: {
      type: String,
    },
    error: {
      type: String,
    },
    value: [String, Number],
    placeholder: {
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
.form-textarea {
  display: block;
  max-width: 100%;
  margin: 0 auto rem(20px);

  &__field {
    resize: none;
    min-height: rem(160px);
    width: 100%;
    font-size: rem(24px);
    border: 1px solid $yellow;
    color: #1a1511;
    background: #ffffff;
    padding: rem(15px) rem(15px);
    transition: all 0.3s ease-in-out;
    &::placeholder {
      color: $yellow;
      transition: 0.4s;
    }
  }
  &__field:focus {
    border-color: $red;
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
  &__caption {
    font-size: rem(14px);
    line-height: rem(16px);
    color: #000;
    text-transform: none;
    margin-bottom: rem(3px);
  }
  @media (max-width: $sm) {
    &__field {
      min-height: rem(63px);
      font-size: rem(10px);
    }
  }
}
</style>
