<template>
  <div
    id="menu"
    :class="{ expanded: expo_val }"
    @mousemove="mousemove($event)"
    :style="{ backgroundColor: bgColor }"
  >
    <div class="hamburger" ref="hamburger" @click="expandedNav">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <slot></slot>
    <ul class="nav-list" :style="{ color: textColor }">
      <li class="nav-link" v-for="(item, index) in menuData" :key="index">
        <i :class="item.icon" id="box" @click="item.clickMethod"></i>
        <router-link
          :style="{ color: textColor }"
          :to="item.path"
          class="item"
          v-if="expo_val"
          @click="item.clickMethod"
          >{{ item.title }}</router-link
        >
      </li>
    </ul>
    <svg
      id="blob"
      ref="blob"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path id="blob-path" ref="blobPath" :style="{ fill: bgColor }" />
    </svg>
  </div>
</template>
<script>
export default {
  name: "wj-liquidAside",
  props: {
    bgColor: { type: String, default: "#fad075" }, //背景颜色
    textColor: { type: String, default: "#fff" }, //侧边栏文字颜色
    menuData: {
      type: Array,
      default() {
        return [
          {
            title: "item",
            path: "/#",
            icon: "iconfont icon-index",
            clickMethod: null,
          },
        ];
      },
    },
  },
  data() {
    return {
      expanded: "expanded",
      expo_val: false,
      x: 0,
      y: window.screen.availHeight / 2,
      curX: 10,
      curY: 0,
      tarX: 0,
      height: window.screen.availHeight,
      xItteration: 0,
      yItteration: 0,
      hoverZone: 150,
      expandAmount: 20,
    };
  },
  mounted() {
    window.requestAnimationFrame(this.svgCurve);
  },
  methods: {
    expandedNav() {
      this.expo_val = !this.expo_val;
    },
    mousemove(e) {
      this.x = e.pageX;
      this.y = e.pageY;
    },
    easeOutExpo(
      currentItteration,
      startValue,
      changeInValue,
      totalItterations
    ) {
      return (
        changeInValue *
          (-Math.pow(2, (-10 * currentItteration) / totalItterations) + 1) +
        startValue
      );
    },
    svgCurve() {
      if (this.curX > this.x - 1 && this.curX < this.x - 1) {
        this.xItteration = 0;
      } else {
        if (this.expo_val) {
          this.tarX = 0;
        } else {
          this.xItteration = 0;
          if (this.x > this.hoverZone) {
            this.tarX = 0;
          } else {
            this.tarX = -(
              ((60 + this.expandAmount) / 100) *
              (this.x - this.hoverZone)
            );
          }
        }
        this.xItteration++;
      }
      if (this.curY > this.y - 1 && this.curY < this.y - 1) {
        this.yItteration = 0;
      } else {
        this.yItteration = 0;
        this.yItteration++;
      }
      this.curX = this.easeOutExpo(
        this.xItteration,
        this.curX,
        this.tarX - this.curX,
        100
      );
      this.curY = this.easeOutExpo(
        this.yItteration,
        this.curY,
        this.y - this.curY,
        100
      );
      var anchorDistance = 200;
      var curviness = anchorDistance - 40;
      var newCurve2 =
        "M60," +
        this.height +
        "H0V0h60v" +
        (this.curY - anchorDistance) +
        "c0," +
        curviness +
        "," +
        this.curX +
        "," +
        curviness +
        "," +
        this.curX +
        "," +
        anchorDistance +
        "S60," +
        this.curY +
        ",60," +
        (this.curY + anchorDistance * 2) +
        "V" +
        this.height +
        "z";
      this.$refs.blobPath.setAttribute("d", newCurve2);
      this.$refs.blob.setAttribute("width", this.curX + 70);
      if (!this.expo_val) {
        this.$refs.hamburger.style.cssText = `transform: translate(${this.curX}px, ${this.curY}px)`;
      } else {
        this.$refs.hamburger.style.cssText =
          "transform: translate(0px, 40px); transition: all 0.5s ease";
      }
      window.requestAnimationFrame(this.svgCurve);
    },
  },
};
</script>
<style scoped>
@font-face {
  font-family: "iconfont"; /* Project id 2609401 */
  src: url("//at.alicdn.com/t/font_2609401_rw0vlsdciis.woff2?t=1628955683020")
      format("woff2"),
    url("//at.alicdn.com/t/font_2609401_rw0vlsdciis.woff?t=1628955683020")
      format("woff"),
    url("//at.alicdn.com/t/font_2609401_rw0vlsdciis.ttf?t=1628955683020")
      format("truetype");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-index:before {
  content: "\e638";
}

#menu {
  position: fixed;
  height: 100%;
  left: 0;
  top: 0;
  transition: all 0.3s ease;
  width: 60px;
}
#menu.expanded {
  width: 240px;
}
.hamburger {
  position: absolute;
  margin-top: -10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  right: -10px;
  z-index: 101;
}
.hamburger .line {
  background: #fff;
  border-radius: 3px;
  width: 100%;
  height: 4px;
}
.hamburger .line:nth-child(2) {
  margin: 3px 0;
}
.nav-list {
  /* width: 80%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  /* top: 10px; */
  height: 100%;
  font-size: 20px;
}
.nav-list .nav-link {
  display: flex;
  justify-content: center;
  /* text-align: center; */
  margin-left: 60px;
  padding: 18px 0;
  min-height: 60px;
  overflow: hidden;
  white-space: nowrap;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
#box {
  position: absolute;
  left: 10px;
  font-size: 20px;
}
.nav-list .nav-link:hover {
  text-decoration: none;
  transition: all 0.4s ease-in-out;
  margin-left: 30px;
}
#blob {
  position: absolute;
  top: 0;
  z-index: 1;
  right: 20px;
  transform: translateX(100%);
  height: 100%;
}
#blob-path {
  height: 100%;
}
.item {
  width: 160px;
}
</style>