<template>
  <div class="container">
    <slot>
      <car-dir-item />
    </slot>
  </div>
</template>

<script>
export default {
  name: "wj-car-dir",
};
</script>

<style lang="less" scoped>
.container {
  min-width: 400px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  transform-style: preserve-3d;
  &:hover .card {
    transform: perspective(500px) rotateY(30deg);
  }
}
.container .card:hover {
  transform: perspective(500px) rotateY(0deg);
}
.container .card:hover ~ .card {
  transform: perspective(500px) rotateY(-30deg);
}
</style>