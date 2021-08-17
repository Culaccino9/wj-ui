<template>
  <div class="box" :style="{width:width+'px',height:height+'px'}">
    <h2>{{ title }}</h2>
    <h3>{{ subhead }}</h3>
    <div>
      <slot>
        这里可以写一些东西 <br />Please write something <br />这里可以写一些东西
        <br />Please write something <br />这里可以写一些东西 <br />Please write
        something <br
      /></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "wj-car",
  props: {
    title: { type: String, default: "01" },
    subhead: { type: String, default: "这是副标题" },
    width: { type: String, default: "240" },
    height: { type: String, default: "300" },
  },
};
</script>

<style lang="less" scoped>
.box {
  position: relative;
  background: #fff;
  padding: 3% 40px 60px;
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #2196f3;
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.5s;
  }
  &:hover:before {
    transform: scaleY(1);
    transform-origin: bottom;
    transition: transform 0.5s;
  }
  &:hover h2 {
    opacity: 1;
    color: #fff;
    transform: translateY(-50px);
  }
  h2 {
    position: absolute;
    left: 12.5%;
    top: 2%;
    font-size: 3.4em;
    font-weight: 800;
    z-index: 1;
    opacity: 0.1;
    transition: 0.5s;
  }
  h3 {
    position: relative;
    font-size: 1.5em;
    z-index: 2;
    color: #333;
    transition: 0.5s;
  }
  div {
    position: relative;
    z-index: 2;
    color: #555;
    transition: 0.5s;
  }
}
.box:hover h3,
.box:hover div {
  color: #fff;
}
</style>