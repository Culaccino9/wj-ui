<template>
  <li class="item">
    <span class="title">
      <slot></slot>
    </span>
  </li>
</template>

<script>
export default {
  name: "menu-effect-item",
};
</script>

<style lang="less" scoped>
.item .title {
  position: relative;
  display: block;
  margin: 20px 0;
  padding: 10px 20px;
  text-transform: uppercase;
  font-weight: bold;
  color: #262626;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    transform: scaleY(2);
    opacity: 0;
    transition: 0.5s;
    z-index: -1;
  }
  &:hover:before {
    transform: scaleY(1.2);
    opacity: 1;
  }
}
.item .title:after {
  content: "";
  position: absolute;
  top: 1px;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  transform: scale(0);
  transition: 0.5s;
  z-index: -1;
}
.item .title:hover:after {
  transform: scale(1);
}
</style>