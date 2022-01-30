<template>
  <div class="scroll-down">
    <span>{{ text }}</span>
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 16.25L15.25 22.5L21.5 16.25"
        stroke="#FFF7F4"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 7.5L15.25 13.75L21.5 7.5"
        stroke="#FFF7F4"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      default: "Далее",
    },
  },
};
</script>

<style lang="scss" scoped>
.scroll-down {
  position: absolute;

  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(-50%);
  bottom: 0;
  color: #fff;
  font-size: rem(10px);
  z-index: 10;
  span {
    white-space: nowrap;
  }
  path {
    animation: arrow 2s ease-in infinite forwards;
    &:nth-child(1) {
      animation-delay: 0.5s;
    }
  }

  @media (max-width: $sm) {
    width: 100%;
    padding-bottom: rem(12px);
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: rem(94px);
      display: block;
      background: linear-gradient(
        to top,
        #4d0a24 2.53%,
        rgba(152, 31, 78, 0.38) 78.2%,
        rgba(152, 31, 78, 0) 99.9%
      );
      z-index: -1;
    }
  }
  @media (min-width: $sm) {
    bottom: rem(22px);
    font-size: rem(14px);
    z-index: 100;
  }
}
@keyframes arrow {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>
