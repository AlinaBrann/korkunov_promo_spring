<template>
  <div class="form-select">
    <div class="form__caption" v-if="labelText">
      {{ labelText }}
      <div
        v-if="tooltip"
        class="form__tooltip"
        v-tooltip.bottom="{ content: tooltip, trigger: 'click' }"
      >
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.3998 8.41V7.86C6.3998 7.71333 6.40647 7.59 6.4198 7.49C6.4398 7.38333 6.4698 7.29 6.5098 7.21C6.55647 7.12333 6.61314 7.04333 6.6798 6.97C6.75314 6.89 6.8398 6.79667 6.9398 6.69L7.7098 5.91C7.87647 5.74333 7.9598 5.52667 7.9598 5.26C7.9598 5 7.87314 4.79 7.6998 4.63C7.53314 4.46333 7.3198 4.38 7.0598 4.38C6.7798 4.38 6.5498 4.47667 6.3698 4.67C6.1898 4.85667 6.08647 5.08667 6.0598 5.36L4.7798 5.26C4.8198 4.94 4.90314 4.65667 5.0298 4.41C5.15647 4.15667 5.3198 3.94333 5.5198 3.77C5.72647 3.59667 5.96314 3.46667 6.2298 3.38C6.49647 3.28667 6.7898 3.24 7.1098 3.24C7.4098 3.24 7.68647 3.28333 7.9398 3.37C8.1998 3.45667 8.42314 3.58333 8.6098 3.75C8.80314 3.91 8.95314 4.11333 9.0598 4.36C9.16647 4.6 9.2198 4.87667 9.2198 5.19C9.2198 5.41 9.1898 5.60333 9.1298 5.77C9.0698 5.93667 8.98981 6.09 8.8898 6.23C8.7898 6.37 8.67314 6.50333 8.5398 6.63C8.41314 6.75667 8.27647 6.89 8.1298 7.03C8.03647 7.11667 7.95647 7.19333 7.8898 7.26C7.82314 7.32667 7.76647 7.39667 7.7198 7.47C7.6798 7.53667 7.6498 7.61667 7.6298 7.71C7.6098 7.79667 7.5998 7.90333 7.5998 8.03V8.41H6.3998ZM6.1998 9.8C6.1998 9.58667 6.27647 9.40333 6.4298 9.25C6.5898 9.09667 6.7798 9.02 6.9998 9.02C7.21314 9.02 7.3998 9.09333 7.5598 9.24C7.7198 9.38667 7.7998 9.56667 7.7998 9.78C7.7998 9.99333 7.7198 10.1767 7.5598 10.33C7.40647 10.4833 7.2198 10.56 6.9998 10.56C6.89314 10.56 6.7898 10.54 6.6898 10.5C6.59647 10.46 6.51314 10.4067 6.4398 10.34C6.36647 10.2733 6.30647 10.1933 6.2598 10.1C6.2198 10.0067 6.1998 9.90667 6.1998 9.8Z"
            fill="white"
          />
          <circle cx="7" cy="7" r="6.5" stroke="white" />
        </svg>
      </div>
    </div>
    <v-select
      :searchable="false"
      :options="options"
      v-model.trim="retValue"
      :name="name"
      @focus="errorReset()"
      @change="onInput()"
      @input="onInput()"
      :class="className"
    >
      <template v-slot:option="option">
        <span v-html="option.label"></span>
      </template>
      <span slot="no-options">Ничего не найдено</span>
    </v-select>

    <div class="error-hint" v-if="error">{{ error }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      retValue: this.field,
    };
  },

  methods: {
    errorReset() {
      this.$parent.errorReset();
    },

    onInput() {
      this.$emit("input", this.retValue);
    },
  },
  props: [
    "options",
    "field",
    "name",
    "error",
    "labelText",
    "className",
    "tooltip",
  ],
};
</script>

<style lang="scss">
.form-select {
  max-width: 300px;
  margin: 0 auto 13px;
  .v-select {
    height: 100%;
    &._bordered {
      .vs__open-indicator {
        width: 12px;
        height: 6px;
        background-image: url("../../assets/images/select-arrow.svg");
        background-repeat: no-repeat;
        background-size: contain;
      }
      .vs__selected {
        position: relative;
        color: #1a1511;
        padding: 2px 5px 0 0;
      }
      .vs__dropdown-toggle {
        border: 2px solid #912982;
        border-radius: 20px;
      }
      .vs__dropdown-menu {
        width: 100%;
        min-width: auto;
      }
    }
  }
  .vs__dropdown-toggle {
    position: relative;
    display: flex;
    align-items: center;
    line-height: 1;
    height: 100%;
    z-index: 1001;
    background: #ffffff;
    border-radius: 0px;
    border: 1px solid $yellow;
    padding: 0px 16px;
  }

  .vs__selected-options {
    padding: 0;
  }

  .vs__search {
    padding: 0;
    margin: 0;
    border: 0;
    color: #1a1511;
    font-size: 13px;
    text-transform: uppercase;

    &:focus {
      border: 0;
      padding: 0;
      margin: 0;
      font-size: 13px;
    }
  }

  .vs__actions {
    padding: 0px 0px 0 3px;
  }

  .vs__clear {
    display: none;
  }

  .vs__open-indicator {
    width: 16px;
    height: 16px;
    background-image: url("../../assets/images/select-arrow.svg");
    background-repeat: no-repeat;
    background-position: center;
    path {
      display: none;
    }
  }

  .vs__selected {
    bottom: 0;
    padding: 0;
    margin: 0;
    color: $yellow;
    font-size: 13px;
  }

  .vs--single.vs--open .vs__selected {
    position: relative;
    opacity: 1;
  }

  .vs__dropdown-menu {
    border: 0;
    margin-top: -35px;
    padding-top: 38px;
    // background: rgba(238, 178, 36, 0.5);
    box-shadow: 0px 4px 4px rgba(99, 89, 66, 0.25);
    border-radius: 0px;
  }

  .vs__dropdown-option {
    color: $yellow;
    font-size: 13px;
    padding: 7px 18px 6px;
  }

  .vs__dropdown-option--highlight {
    color: #1a1511;
    background-color: rgba($yellow, 0.5);
  }
  @media (max-width: $sm) {
    width: 100%;
    max-width: 100%;
    height: rem(36px);
    .vs__selected {
      font-size: rem(10px);
      font-family: "Demi";
      letter-spacing: 1px;
    }
  }
}
</style>
