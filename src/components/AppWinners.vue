<template>
  <section class="winners section">
    <div class="container">
      <div class="winners__header">
        <h2 class="winners__title section__title">
          
          Победители
        </h2>
      </div>
      <div class="winners__tabs-nav">
        <div class="winners__tabs-nav-items">
          <a
            @click.prevent="setActive('week')"
            :class="{
              _active: isActive('week'),
            }"
            class="winners__tabs-nav-item"
          >
            Eженедельные призы
          </a>
          <a
            @click.prevent="setActive('main')"
            :class="{
              _active: isActive('main'),
            }"
            class="winners__tabs-nav-item"
          >
            Главные призы
          </a>
        </div>
        
        <div class="winners__search">
          <form
            class="winners__search-form"
            v-on:submit.prevent="searchForm"
            :class="{
              error:
                validationStatus($v.searchQuery) ||
                this.errorMessage.searchQuery,
            }"
          >
            <input
              class="winners__search-field"
              type="email"
              name="term"
              v-model="searchQuery"
              @focus="errorReset()"
              placeholder="найти себя по e-mail"
            />
            <button type="submit" class="winners__search-button"></button>
            <div
              v-if="searchQuery"
              @click="formReset()"
              class="winners__search-clear"
            ></div>
            <div
              class="error-hint"
              v-if="
                validationStatus($v.searchQuery) ||
                this.errorMessage.searchQuery
              "
              v-html="
                (!$v.searchQuery.required && $v.searchQuery.$error
                  ? 'Обязательное поле'
                  : !$v.searchQuery.email && $v.searchQuery.$error
                  ? 'Некорректный e-mail'
                  : '') || this.errorMessage.searchQuery
              "
            ></div>
          </form>
        </div>
      </div>

      <div
        class="winners__content"
        :class="{ _show: isActive('week') }"
        id="week"
      >
        <div class="winners__result">
          <Table
            :thead="['E-mail', 'Дата', 'Приз']"
            class="winners-tab-desktop"
            v-if="winners"
          >
            <template v-slot:tbody>
              <tr v-for="(item, index) in winners" :key="index">
                <td>
                  {{ item.email }}
                </td>

                <td>
                  {{ item.date }}
                </td>
                <td>
                  {{ item.prize }}
                </td>
              </tr>
            </template>
          </Table>
          <div class="no-results" v-if="noResults">Ничего не найдено</div>
          <div class="winners__inner">
            <table class="winners-tab-mobile">
              <tr v-for="(item, index) in winners" :key="index">
                <td>
                  <table class="winners-tab-mobile__inner">
                    <tr>
                      <td>Email</td>
                      <td>
                        {{ item.email }}
                      </td>
                    </tr>
                    <tr>
                      <td>Дата</td>
                      <td>
                        {{ item.date }}
                      </td>
                    </tr>
                    <tr>
                      <td>Приз</td>
                      <td>
                        {{ item.prize }}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </div>
          
        </div>
      </div>
      <div
        class="winners__content"
        :class="{ _show: isActive('main') }"
        id="main"
      >
        <div class="winners__result">
          <Table
            :thead="['E-mail', 'Дата', 'Приз']"
            class="winners-tab-desktop"
            v-if="winners"
          >
            <template v-slot:tbody>
              <tr v-for="(item, index) in winners" :key="index">
                <td>
                  {{ item.email }}
                </td>

                <td>
                  {{ item.date }}
                </td>
                <td>
                  {{ item.prize }}
                </td>
              </tr>
            </template>
          </Table>
          <div class="no-results" v-if="noResults">Ничего не найдено</div>
          <div class="winners__inner">
            <table class="winners-tab-mobile">
              <tr v-for="(item, index) in winners" :key="index">
                <td>
                  <table class="winners-tab-mobile__inner">
                    <tr>
                      <td>Email</td>
                      <td>
                        {{ item.email }}
                      </td>
                    </tr>
                    <tr>
                      <td>Дата</td>
                      <td>
                        {{ item.date }}
                      </td>
                    </tr>
                    <tr>
                      <td>Приз</td>
                      <td>
                        {{ item.prize }}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <AppFooter class="hidden-xs"/>
  </section>
</template>

<script>
import Table from "@/components/Table.vue";
import $ from "jquery";
import { required, email } from "vuelidate/lib/validators";
import AppFooter from "./AppFooter.vue";

export default {
  components: {
    Table,
    AppFooter
},
  data: function () {
    return {

      page: 1,
      perPage: 1,
      pages: [],
      searchQuery: null,
      date: null,
      total: 0,
      noResults: false,
      errorMessage: {
        date: null,
        searchQuery: null,
      },

      winners: [],
      activeItem: "week",
    };
  },
  validations: {
    searchQuery: { required, email },
  },
  methods: {
    errorReset() {
      this.$v.$reset();

      this.errorMessage = {
        searchQuery: null,
      };
    },
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    setPages(total) {
      this.pages = [];
      if (total) {
        for (let index = 1; index <= total.length; index++) {
          this.pages.push(index);
        }
      }
    },
    paginate() {
      let page = this.page;
      this.$store.dispatch("GetWinners", { page: page }).then((response) => {
        this.winners = response.result;
      });
    },
    getWinnersResult(index) {
      let date = "date" + index;
      this.$store.dispatch("GetWinners", { date: date }).then((response) => {
        this.winners = response.result;
      });
    },
    searchForm() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      this.page = 1;
      this.$store
        .dispatch("SearchWinners", { term: this.searchQuery })
        .then((response) => {
          this.winners = response.result;
          if (!this.winners) {
            this.noResults = true;
          } else {
            this.noResults = false;
          }
        });
    },
    formReset() {
      this.$v.$reset();
      this.searchQuery = null;
      this.$store
        .dispatch("GetWinners", { page: this.page })
        .then((response) => {
          this.winners = response.result;
        });
    },
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
  },
  mounted() {},
  created() {
    this.$store.dispatch("GetWinners").then((response) => {
      this.total = response.paging.total;
      this.winners = response.result;
    });
  },
  watch: {
    winners() {
      this.setPages(this.winners);
    },
  },
  computed: {
    // displayedWinners() {
    //   return this.paginate(this.winners);
    // },
  },
};
</script>

<style lang="scss">
.winners {
  position: relative;
  display: flex;
  padding: rem(70px) 0;
  align-items: center;
  z-index: 1;
  overflow: hidden;
  &__header {
    display: flex;
    justify-content: center;
  }
  &__title {
    margin-bottom: rem(20px);
  }
  .container {
    position: relative;
    z-index: 10;
  }
  &__search {
    margin-left: auto;
    &-field {
      width: 100%;
      padding: 2px rem(20px) 0 rem(24px);
      height: rem(54px);
      background: #fff;
      border-radius: 0px;
      font-size: rem(16px);
      border: 1px solid $yellow;
      font-family: "Demi";
      color: $yellow;
      box-shadow: none;
      outline: none;
      &::placeholder {
        color: $yellow;
        text-transform: uppercase;
      }
    }
    &-form {
      position: relative;
      width: rem(430px);
      max-width: 100%;
      margin: rem(30px) auto rem(31px);
    }
    &-button {
      position: absolute;
      top: 0%;
      right: 0;
      width: rem(54px);
      height: rem(54px);
      background: $yellow url("../assets/images/search.svg") no-repeat center;
      background-size: rem(21px);
      &::after {
        content: '';
        position: absolute;
        top: rem(5px);
        left: rem(5px);
        width: 100%;
        height: 100%;
        display: block;
        background: #997C4B;
        transition: .4s;
        z-index: -1;
      }
      &:hover {
        &::after {
          transform: translate(#{rem(-5px)}, #{rem(-5px)});
        }
      }
    }
    &-clear {
      position: absolute;
      top: 0;
      right: rem(14px);
      width: rem(18px);
      height: 100%;
      background: url("../assets/images/error.svg") no-repeat center;
      background-size: 100%;
      cursor: pointer;
    }
  }
  &__content {
    display: none;
    align-items: stretch;
    height: 50vh;
    &._show {
      display: flex;
    }
  }
  &__tabs-nav {
    display: flex;
    padding: 0 0 rem(25px);
    align-items: center;
    &-item {
      margin-right: rem(36px);
      font-size: rem(20px);
      line-height: rem(34px);
      color: #FFF;
      font-family: "Bold";
      border-bottom: 3px solid transparent;
      transition: 0.4s;
      cursor: pointer;
      &:hover,
      &._active {
        color: $yellow;
        border-color: $yellow;
      }
    }
  }
  &__nav {
    max-height: 100%;
    height: 100%;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: rem(13px);
    }
    /* Track */
    &::-webkit-scrollbar-track {
      background: transparent;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      border-radius: rem(7px);
      background: #2e2e2e;
      transition: all 0.3s ease-in-out;
    }
    &-item {
      display: block;
      height: calc((#{rem(750px)} - #{rem(20px)}) / 5);
      padding: rem(41px) rem(53px) rem(35px);
      font-size: rem(42px);
      line-height: rem(38px);
      font-weight: 500;
      background: #fff;
      border-radius: rem(10px) 0 0 rem(10px);
      opacity: 0.66;
      transition: 0.4s;
      cursor: pointer;
      &:not(:last-of-type) {
        margin-bottom: rem(5px);
      }
      &:hover {
        opacity: 1;
      }
    }
  }
  &__result {
    flex: auto;
    padding: rem(15px) 0;
  }
  .table {
    max-width: 100%;
    &__inner {
      max-height: 100%;
      padding-right: rem(48px);
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: rem(13px);
      }
      /* Track */
      &::-webkit-scrollbar-track {
        background: transparent;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        border-radius: rem(7px);
        background: #2e2e2e;
        transition: all 0.3s ease-in-out;
      }
    }
    thead {
      tr {
        border-bottom: 3px solid $yellow;
      }
    }
    th {
      padding: rem(25px) rem(25px);
      font-size: rem(20px);
      line-height: 1;
      font-family: "Demi";
      color: #FFF;
    }
    tbody {
      tr {
        td {
          text-transform: none;
          font-size: rem(20px);
          padding: rem(20px) rem(25px);
          color: #FFF;
        }
      }
    }
  }
  &-tab-desktop {
    display: none;
  }
  &-tab-mobile {
    width: 100%;
    font-size: rem(12px);
    color: #FFF;
    & > tr {
      &:not(:last-of-type) {
        border-bottom: 1px solid $yellow;
      }
    }
    &__inner {
      width: 100%;
      padding-bottom: rem(7px);
      tr {
        &:last-of-type {
          td {
            padding-bottom: rem(10px);
          }
        }
      }
      tr {
        &:first-of-type {
          td {
            padding-top: rem(10px);
          }
        }
      }
      td {
        padding: rem(4px) 0;
        &:first-of-type {
          text-transform: uppercase;
          padding-right: rem(27px);
        }
      }
    }
  }
  .no-results {
    text-align: center;
    color: #fff;
  }
  @media (min-width: $sm) {
    &::after {
      bottom: rem(140px);
    }
    &-tab-desktop {
      display: block;
    }
    &-tab-mobile {
      display: none;
    }
  }
  @media (min-width: $md) {
    padding: rem(100px) 0;
    &::after {
      bottom: rem(140px) !important;
    }
    &__background {
      display: block;
    }
    &__title {
      margin-bottom: rem(15px);
    }
    &__search-form {
      margin: 0px;
    }
  }
  @media (max-width: $sm) {
    align-items: flex-start;
    padding-bottom: rem(20px);
    .container {
      height: 100%;
    }
    &__tabs-nav {
      flex-wrap: wrap;
      padding-top: 0;
      padding-bottom: rem(10px);
      &-items {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
      &-item {
        font-size: rem(14px);
        line-height: 1.5;
        margin: 0;
        padding-left: 0;
        font-family: "Demi";
        border-bottom-width: 1px;
        &:first-of-type {
          margin-right: rem(10px);
        }
      }
    }
    &__search {
      margin: auto;
      width: 100%;
      order: -1;
      &-form {
        margin-top: 0;
      }
      &-field {
        height: rem(40px);
        padding-left: rem(15px);
        font-size: rem(12px);
      }
      &-button {
        width: rem(40px);
        height: rem(40px);
        background-size: rem(16px);
        &::after {
          top: rem(3px);
          left: rem(3px);
        }
      }
    }
    &__nav {
      display: none;
    }
    &__result {
      height: 100%;
            
    }
    &__content {
      height: calc(var(--vh, 1vh) * 55);
    }
    &__inner {
      height: 100%;
      padding: rem(9px) rem(10px) rem(9px) 0;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: rem(6px);
      }
      /* Track */
      &::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.2);
        border-radius: 0px;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        border-radius: 0px;
        background: $yellow;
        transition: all 0.3s ease-in-out;
      }
    }
  }
}
</style>
