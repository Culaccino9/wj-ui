<template>
  <div class="container">
    <slot>
      <car-effect-item><slot></slot></car-effect-item>
    </slot>
  </div>
</template>

<script>
export default {
  name: "wj-car-effect",
};
</script>

<style lang="less" scoped>
.container {
  // max-width: 1000px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  transition: 0.5s;
  &:hover .card {
    filter: blur(5px);
    transform: scale(0.7);
  }
  .card {
    position: relative;
    // width: 250px;
    // height: 300px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    &:hover {
      filter: blur(0px);
      transform: scale(1);
    }
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: #fff;
      z-index: 1;
      transition: 0.5s;
    }
    &:hover:before {
      background: rgb(51, 50, 94);  //后期可以改成less全局变量
      transform: scaleY(1.15);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>