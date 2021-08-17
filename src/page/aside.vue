<template>
  <div class="body">
    <aside>
      <wj-liquidAside :menuData="menuData" bgColor="#a6785e"></wj-liquidAside>
    </aside>
    <main>
      <div class="topage">
        <div @click="toPage('/')" class="btn">
          <wj-button-glass color="#f3e6c3">回到主页</wj-button-glass>
        </div>
        <div @click="toPage('/about')" class="btn">
          <wj-button-glass type="danger" color="#f3e6c3"
            >关于我</wj-button-glass
          >
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuData: [
        {
          title: "主页",
          path: "/",
          icon: "iconfont icon-index",
          clickMethod: (e) => {
            console.log(e);
          },
        },
        {
          title: "关于我",
          path: "/about",
          icon: "iconfont icon-index",
          clickMethod: (e) => {
            console.log(e);
          },
        },
        {
          title: "menu3",
          path: "/about",
          icon: "iconfont icon-index",
          clickMethod: (e) => {
            console.log(e);
          },
        },
        {
          title: "menu4",
          path: "/about",
          icon: "iconfont icon-index",
          clickMethod: (e) => {
            console.log(e);
          },
        },
        {
          title: "menu5",
          path: "/about",
          icon: "iconfont icon-index",
          clickMethod: (e) => {
            console.log(e);
          },
        },
        {
          title: "menu6",
          path: "/about",
          icon: "iconfont icon-index",
          clickMethod: (e) => {
            console.log(e);
          },
        },
      ],
    };
  },
  methods: {
    toPage(type) {
      this.$router.push(type);
    },
  },
};
</script>

<style lang="less" scoped>
.body {
  display: flex;
  justify-content: space-between;
  height: 100vh;
  background-color: #725047;
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    .topage {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 180px;
    }
    .btn {
      width: 240px;
    }
  }
}
</style>