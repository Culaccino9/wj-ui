<template>
  <ul>
    <li v-for="(item, index) in data" :key="index">
      <a :href="item.path">
        <i :class="item.icon" aria-hidden="true"></i>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "wj-share",
  props: {
    data: {
      type: Array,
      default() {
        return [
          {
            icon: "icon-GitHub",
            path: "/#",
          },
          {
            icon: "icon-weibo1",
            path: "/#",
          },
          {
            icon: "icon-weixin",
            path: "/#",
          },
          {
            icon: "icon-QQ",
            path: "/#",
          },
          {
            icon: "icon-facebook1",
            path: "/#",
          },
        ];
      },
    },
  },
};
</script>

<style lang="less" scoped>
@font-face {
  font-family: "iconfont"; 
  src: url('//at.alicdn.com/t/font_2746305_6sodid0ohym.woff2?t=1629041615654') format('woff2'),
       url('//at.alicdn.com/t/font_2746305_6sodid0ohym.woff?t=1629041615654') format('woff'),
       url('//at.alicdn.com/t/font_2746305_6sodid0ohym.ttf?t=1629041615654') format('truetype');
}
*[class^="icon-"] {
  font-family: "iconfont" !important;
  font-size: 58px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-facebook1:before {
  content: "\e65a";
}
.icon-QQ:before {
  content: "\e65e";
}
.icon-weixin:before {
  content: "\e73b";
}
.icon-weibo1:before {
  content: "\e619";
}
.icon-GitHub:before {
  content: "\e8c6";
}

ul {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  display: flex;
  width: 320px;
  height: 60px;
  &:before {
    content: "\e612";
    font-family: iconfont;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #ff00ff, #8a2be2);
    border-radius: 30px;
    text-align: center;
    line-height: 60px;
    color: #fff;
    font-size: 30px;
    margin: 0 2px;
    transition: 0.5s;
    z-index: 1;
  }
  &:hover:before {
    width: 60px;
  }
  li {
    position: absolute;
    list-style: none;
    transition: 1s;
    a {
      display: block;
      width: 60px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      text-decoration: none;
      background: #fff;
      color: #fff;
      margin: 0 2px;
      border-radius: 50%;
      font-size: 30px;
      transition: 1s;
    }
  }
}
ul li:nth-child(1) a {
  color: #3b5999;
}
ul li:nth-child(2) a {
  color: #55acee;
}
ul li:nth-child(3) a {
  color: #dd4b39;
}
ul li:nth-child(4) a {
  color: #0077b5;
}
ul li:nth-child(5) a {
  color: #e4405f;
}
ul:hover li:nth-child(1) a {
  transform: translateX(64px) rotate(360deg);
  transition-delay: 0.8s;
}
ul:hover li:nth-child(2) a {
  transform: translateX(128px) rotate(360deg);
  transition-delay: 0.6s;
}
ul:hover li:nth-child(3) a {
  transform: translateX(192px) rotate(360deg);
  transition-delay: 0.4s;
}
ul:hover li:nth-child(4) a {
  transform: translateX(256px) rotate(360deg);
  transition-delay: 0.2s;
}
ul:hover li:nth-child(5) a {
  transform: translateX(320px) rotate(360deg);
  transition-delay: 0s;
}
</style>