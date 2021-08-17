<template>
  <li>
    <a :href="path">
      <span class="icon"
        ><i class="icon-you" :style="{ color: color }"></i
      ></span>
      <span class="title" :style="{ color: color }"><slot></slot></span>
    </a>
  </li>
</template>

<script>
export default {
  name: "nav-item",
  props: {
    icon: { type: String, default: "icon-you" },
    color: { type: String, default: "rgb(231, 143, 143)" },
    path: { type: String, default: "#" },
  },
};
</script>

<style lang="less" scoped>
@font-face {
  font-family: "iconfont"; /* Project id 2746305 */
  src: url("//at.alicdn.com/t/font_2746305_xinfbeqyr6n.woff2?t=1629125940721")
      format("woff2"),
    url("//at.alicdn.com/t/font_2746305_xinfbeqyr6n.woff?t=1629125940721")
      format("woff"),
    url("//at.alicdn.com/t/font_2746305_xinfbeqyr6n.ttf?t=1629125940721")
      format("truetype");
}
*[class^="icon-"] {
  font-family: "iconfont" !important;
  font-size: 30px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-you:before {
  content: "\e61a";
}

.container .navigation ul li {
  position: relative;
  list-style: none;
  width: 100%;
  cursor: pointer;
}

.container .navigation ul li:hover {
  background: #efefef;
}

.container .navigation ul li a {
  position: relative;
  display: block;
  width: 100%;
  display: flex;
  text-decoration: none;
  font-weight: 500;
}

.container .navigation ul li a .icon {
  position: relative;
  display: block;
  min-width: 80px;
  height: 60px;
  line-height: 60px;
  text-align: center;
}

.container .navigation ul li a .title {
  position: relative;
  display: block;
  height: 60px;
  line-height: 60px;
  white-space: nowrap;
}
</style>