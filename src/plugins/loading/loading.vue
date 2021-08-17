<template>
  <ul class="loading" :style="{backgroundColor:maskColor}" ref="loading" id="loading">
    <li
      v-for="item in 6"
      :key="item"
      :style="{
        width: `${6 * size}px`,
        height: `${20 * size}px`,
        background: `${color}`,
        margin: `0 ${space}px`,
      }"
    ></li>
  </ul>
</template>

<script>
export default {
  name: "wj-loading",
  props: {
    size: { type: String || Number, default: "1" },
    color: { type: String, default: "#409eff" },
    space: { type: Number || String, default: 4 },
    maskColor: { type: String, default: "rgba(0, 0, 0, 0.8)" },
  },
};
</script>

<style lang="less" scoped>
@keyframes animate {
  0% {
    transform: scaleY(1);
  }
  25% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(1);
  }
  75% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(3);
  }
}
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  z-index: 999999;

  li {
    list-style: none;
    animation: animate 0.7s infinite alternate;

    &:nth-child(1) {
      animation-delay: 0.1s;
    }
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.3s;
    }
    &:nth-child(4) {
      animation-delay: 0.4s;
    }
    &:nth-child(5) {
      animation-delay: 0.5s;
    }
    &:nth-child(6) {
      animation-delay: 0.6s;
    }
  }
}
</style>