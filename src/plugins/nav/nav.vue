<template>
  <div class="body">
    <div class="container">
      <div :class="flag ? 'active navigation' : 'navigation'">
        <ul>
          <slot>
          </slot>
        </ul>
      </div>
      <div class="toggle" @click="open"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "wj-nav",
  data() {
    return {
      flag: false,
    };
  },
  methods: {
    open() {
      this.flag = !this.flag;
    },
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
  color: rgb(231, 143, 143);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-you:before {
  content: "\e61a";
}
.body {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  position: relative;
}

.container .navigation {
  position: relative;
  width: 80px;
//   height: 420px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}

.container .navigation.active {
  width: 300px;
}

.toggle {
  position: absolute;
  top: calc(50% - 20px);
  right: -20px;
  width: 40px;
  height: 40px;
  background: rgb(231, 143, 143);
  cursor: pointer;
  border-radius: 50%;
}

.toggle::before {
  content: "\e673";
  font-family: iconfont;
  position: absolute;
  width: 100%;
  height: 100%;
  line-height: 40px;
  text-align: center;
  font-size: 35px;
  color: #fff;
}
.container .navigation ul {
  top: 0;
  left: 0;
  width: 100%;
}
</style>