<template>
  <label
    class="form__field"
    :class="
      color === 'white'
        ? 'form__field--white'
        : '' || color === 'blue'
        ? 'form__field--blue'
        : ''
    "
  >
    <div class="form__caption" v-if="label">{{ label }}</div>
    <input
      v-if="maskValue != ''"
      :disabled="isDisabled"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      class="form__field-input"
      :class="size ? 'form__field-input--' + size : ''"
      v-model.trim="retValue"
      v-mask="maskValue"
      :name="name"
      @focus="errorReset()"
      @input="onInput()"
      @blur="onBlur()"
    />
    <input
      v-else
      :disabled="isDisabled"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      class="form__field-input"
      :class="size ? 'form__field-input--' + size : ''"
      v-model.trim="retValue"
      :name="name"
      @focus="errorReset()"
      @input="onInput()"
      @blur="onBlur()"
    />
    <div class="error-hint" v-if="error">{{ error }}</div>
  </label>
</template>
<script>
export default {
  data() {
    return {
      retValue: this.field,
      maskValue: this.mask || "",
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
    mask: String,
    name: String,
    label: {
      type: String,
    },
    error: {
      type: [String, Boolean],
    },
    value: [String, Number],
    placeholder: {
      type: String,
    },
    type: {
      type: String,
      default: () => {
        return "text";
      },
    },
    isDisabled: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    size: {
      type: String,
      default: () => {
        return "sm";
      },
    },
    color: {
      type: String,
      default: () => {
        return "white";
      },
    },
  },

  components: {},
};
</script>
<style lang="scss" scoped>
.form__field--white {
  margin-bottom: 24px;
}
.form__field--blue {
  margin-bottom: 24px;

  .form__field-input {
    border-color: #d6edf2;
    background-color: #d6edf2;
  }
}

.form__field-input {
  width: 100%;
  max-width: 100%;
  height: rem(67px);
  appearance: none;
  font-size: rem(24px);
  background: #ffffff;
  border: 1px solid #a4a4a4;
  border-radius: 0px;
  /*text-transform: uppercase;*/
  padding: 0 rem(15px) 0;
  transition: all 0.3s ease-in-out;
  color: #1a1511;
  &::placeholder {
    color: $yellow;
    text-transform: uppercase;
    font-family: "Reg";
  }
  &:focus {
    outline: none;
    border-color: $red;
  }
  @media (max-width: $sm) {
    height: rem(33px);
    font-size: rem(11px);
  }
}
</style>
