<template>
  <section class="where-to-buy section">
    <div class="container">
      <div class="section__title" data-show>
        Где купить?
        <span>покупайте «Коркунов» с доставкой на дом</span>
      </div>
      <div class="where-to-buy-list" data-show>
        <a
          v-for="(item, i) in partners"
          :key="i"
          :href="item.link"
          target="_blank"
          class="where-to-buy-list__item"
          :style="item.background ? 'background:' + item.background: ''"
        >
          <img
            :src="require(`../assets/images/partners/${item.logo}`)"
            alt=""
          />
          <div class="where-to-buy-list__item-front">
            <span>Перейти в магазин</span>
            <svg
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8 1L10.54 2.3125L15.58 7.5625H1V9.4375H15.58L10.54 14.6875L11.8 16L19 8.5L11.8 1Z"
                fill="#CFAC72"
                stroke="#CFAC72"
                stroke-width="0.8"
              />
            </svg>
          </div>
        </a>
      </div>
    </div>
    <AppScrollDown text="FAQ" />
  </section>
</template>

<script>
import AppScrollDown from "./AppScrollDown.vue";
export default {
  components: { AppScrollDown },
  data: () => ({
    partners: [
      {
        logo: "ozon.svg",
        link: "https://www.ozon.ru/category/konditerskie-izdeliya-9378/?from_global=true&is_ozon_delivery=t&seller=0&text=%D0%BA%D0%BE%D1%80%D0%BA%D1%83%D0%BD%D0%BE%D0%B2",
      },
      {
        logo: "sber.svg",
        link: "https://sbermarket.ru/marketing/promo_korkunov2022",
      },
      {
        logo: "ya_market.svg",
        link: "https://market.yandex.ru/catalog--produkty/54434/list?text=%D0%BA%D0%BE%D1%80%D0%BA%D1%83%D0%BD%D0%BE%D0%B2&cpa=1&hid=91307&srnum=34&rs=eJwzYgpgBAABcwCG&onstock=0&local-offers-first=0",
      },
      {
        logo: "lenta.png",
        link: "https://lenta.com/brand/korkunov/",
        background: "#013b95"
      },
      {
        logo: "vprok.svg",
        link: "https://www.vprok.ru/catalog/4019/sladosti-i-sneki/brend/korkunov",
      },
      {
        logo: "utkonos.svg",
        link: "https://www.utkonos.ru/brands/a-korkunov",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.where-to-buy {
  padding-top: rem(74px);
  .container {
    position: relative;
    z-index: 10;
  }
  &-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &::after {
      content: "";
      flex: 1 1 auto;
    }
    &__item {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 calc(50% - #{rem(10px)});
      margin: 0 rem(5px) rem(10px);
      background: #fff;
      border: 2px solid $yellow;
      overflow: hidden;
      &::after {
        content: "";
        padding-bottom: 60%;
      }

      img {
        max-width: 70%;
        max-height: 80%;
      }
      &-front {
        position: absolute;
        bottom: rem(28px);
        left: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $yellow;
        font-size: rem(20px);
        text-transform: uppercase;
        transition: 0.2s;
        opacity: 0;
        svg {
          display: block;
          margin-left: rem(7px);
        }
      }
      &:hover {
        .where-to-buy-list__item-front {
          opacity: 1;
        }
      }
    }
  }
  @media (min-width: $sm) {
    &-list {
      &__item {
        flex: 0 0 calc(50% - #{rem(16px)});
      }
    }
  }
  @media (min-width: $md) {
    padding-top: rem(145px);
    &-list {
      margin: 0 rem(-13px);
      &__item {
        margin: 0 rem(13px) rem(25px);
        flex: 0 0 calc(33.33333% - #{rem(26px)});
        &::after {
          content: "";
          padding-bottom: 50%;
        }
      }
    }
  }
}
</style>
