<template>
  <main>
    <header>
      <div id="logo">wj-ui</div>
      <div class="menu">
        <wj-menu-effect>
          <menu-effect-item class="herf-out"
            ><a class="herf" href="#">主页</a></menu-effect-item
          >
          <menu-effect-item class="herf-out"
            ><a class="herf" href="#button">按钮系列</a></menu-effect-item
          >
          <menu-effect-item class="herf-out"
            ><a class="herf" href="#car">卡片系列</a></menu-effect-item
          >
          <menu-effect-item class="herf-out"
            ><a class="herf" href="#other">其他</a></menu-effect-item
          >
          <menu-effect-item class="herf-out"
            ><a class="herf" @click="toPage('/aside')"
              >侧边栏</a
            ></menu-effect-item
          >
          <menu-effect-item class="herf-out"
            ><a class="herf" @click="toPage('/about')"
              >关于我</a
            ></menu-effect-item
          >
        </wj-menu-effect>
      </div>
    </header>
    <section>
      <img src="../assets/img/stars.png" alt="" class="stars" ref="stars" />
      <img src="../assets/img/moon.png" alt="" class="moon" ref="moon" />
      <div class="desc" ref="desc">WELLCOME TO MYUI!</div>
      <!-- <a href="#title" class="btn" ref="btn">嘿嘿嘿~你发现宝藏了</a> -->
      <img
        src="../assets/img/mountains_behind.png"
        alt=""
        class="mountains_behind"
        ref="mountains_behind"
      />
      <img
        src="../assets/img/mountains_front.png"
        alt=""
        class="mountains_front"
        ref="mountains_front"
      />
    </section>
    <div class="text" id="title">
      <div class="article">
        <h2>欢迎使用wj-ui</h2>
        <p>
          首先这是一款基于vue2.x
          web端的ui库（其实库算不上吧，目前而言组件还是太少，功能也太少）,然后，我的地盘我做主，咱还是要介绍一下！~
        </p>
        <p>
          大家好，我是一个95后前端小码农，做前端也有不少时间了，此ui灵感来自各路大神，看到各路大神炫技术，煞是羡慕，开始有了自己的想法，在空余时间，不断学习，于是有了这款啥也不突出，就我腰间椎盘突出的东东。
        </p>
        <p>
          是的，从上面自我表述中，您可以看出我是一个喜欢折腾和琢磨一些新技术的娃儿。（X：你是XXX人吧？-------
          我：你啷个晓得？手动滑稽.jgp）
        </p>
        <p>
          然后，其中有许多的不足，自己技术还不够完善。欢迎各位大神大佬指出，也希望有小伙伴一起学习，进步。
        </p>
        <p>希望可以和大家一起愉快的树(tree)新(new)风(bee)！！！</p>
        <p>PS：后期还会花时间继续完善这个库吧。详情说明文档见：</p>
      </div>
      <Button id="button" />
      <Car id="car" />
      <Other id="other" />
    </div>
    <div v-show="navFlag" class="nav">
      <wj-nav>
        <nav-item path="#logo">主页</nav-item>
        <nav-item path="#button">按钮</nav-item>
        <nav-item path="#car">卡片</nav-item>
        <nav-item path="#other">其他</nav-item>
      </wj-nav>
    </div>
  </main>
</template>
<script>
import Button from "../components/button/button.vue";
import Car from "../components/car/car.vue";
import Other from "../components/otherPlugins/otherPlugins.vue";
export default {
  components: {
    Button,
    Car,
    Other,
  },
  data() {
    return {
      navFlag: false,
      y: window.scrollY,
    };
  },
  mounted() {
    let currentY = window.scrollY;
    let windowY = window.innerHeight;
    currentY <= windowY && window.addEventListener("scroll", this.scrollHandle);
    currentY > windowY &&
      window.removeEventListener("scroll", this.scrollHandle);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollHandle);
  },
  methods: {
    scrollHandle() {
      let value = window.scrollY;
      let windowY = window.innerHeight + 300;
      this.$refs.stars.style.left = value * 0.25 + "px";
      this.$refs.moon.style.top = value * 1.05 + "px";
      this.$refs.mountains_behind.style.top = value * 0.5 + "px";
      this.$refs.desc.style.marginTop = value * 1.5 + "px";
      this.$refs.desc.style.marginRight = value * 2.5 + "px";
      if (value > windowY) {
        this.navFlag = true;
      } else {
        this.navFlag = false;
      }
      // this.$refs.btn.style.marginTop = value * 1.5 + "px";
      // console.log(window.scrollY);
    },
    toPage(page) {
      this.$router.push(page);
    },
  },
};
</script>

<style lang="less" scoped>
.nav {
  position: fixed;
  z-index: 999;
  top: 20%;
  right: 50px;
}
main {
  min-height: 100vh;
  background: linear-gradient(#2b1055, #7597de);
  scroll-behavior: smooth;
}
header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 10;
  padding: 0 100px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  overflow: hidden;
  #logo {
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  .herf {
    color: #676f6c;
    transition: all 0.5s;
  }
  .herf-out:hover .herf {
    color: #fff;
  }
}

section {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 100vh;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  .desc {
    position: absolute;
    z-index: 5;
    font-size: 70px;
    font-weight: 700;
    right: -350px;
    white-space: nowrap;
  }
  .btn {
    position: absolute;
    z-index: 5;
    padding: 10px 20px;
    font-weight: 600;
    transform: translateY(80px);
    background-color: #fff;
    border-radius: 30px;
    text-decoration: none;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100px;
    bottom: 0;
    left: 0;
    background: linear-gradient(to top, #1c0522, transparent);
    z-index: 7;
  }
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    object-fit: cover;
    pointer-events: none;
  }
  section .stars {
    z-index: 1;
  }

  .moon {
    z-index: 2;
    mix-blend-mode: screen;
  }

  .mountains_behind {
    z-index: 4;
  }

  .mountains_front {
    z-index: 5;
  }
}
.text {
  color: #262626;
  padding: 20px 150px;
  background-color: #fff;
  // background-color: #1c0522;
  h2 {
    font-size: 30px;
    font-weight: 600;
  }
}
</style>