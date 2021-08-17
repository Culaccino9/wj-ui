<template>
  <div class="box" :style="boxStyle">
    <div class="front-face" :style="{ background: frontBgColor }">
      <slot name="fornt"></slot>
    </div>
    <div class="back-face" :style="{ background: backBgColor }">
      <slot name="back"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "wj-car-turn",
  props: {
    boxStyle: { type: Object },
    frontBgColor: { type: String, default: "#fff" },
    backBgColor: {
      type: String,
      default: "linear-gradient(-135deg, #c850c0, #4158d0)",
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  position: relative;
  width: 350px;
  height: 220px;
  perspective: 1000px;
  cursor: pointer;
  &:hover .back-face {
    opacity: 1;
    transform: rotateX(0deg);
  }
  &:hover .front-face {
    opacity: 0;
    transform: translateY(-110px) rotateX(90deg);
  }
  .front-face {
    background: #fff;
    height: 100%;
    width: 100%;
    box-shadow: 0px 5px 20px 0px rgba(0, 81, 250, 0.1);
    transition: all 0.5s ease;
  }

  .back-face {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    height: 100%;
    width: 100%;
    color: #fff;
    opacity: 0;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    transform: translateY(110px) rotateX(-90deg);
    box-shadow: 0px 5px 20px 0px rgba(0, 81, 250, 0.1);
    transition: all 0.5s ease;
  }
}
@media (max-width: 700px) {
  .wrapper {
    margin: 200px auto;
  }
}
</style>