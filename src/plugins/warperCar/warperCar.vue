<template>
  <div class="wrapper">
    <div class="card" style="--delay: -1">
      <div class="content">
        <div class="img">G</div>
        <div class="details">
          <span class="name">github</span>
          <p>id：NaguoMou</p>
        </div>
      </div>
      <a href="https://github.com/Culaccino9" target="_blank">myGithub</a>
    </div>
    <div class="card" style="--delay: 0">
      <div class="content">
        <div class="img">B</div>
        <div class="details">
          <span class="name">blog</span>
          <p>to1874</p>
        </div>
      </div>
      <a href="https://www.to1874.com" target="_blank">myBlog</a>
    </div>
    <div class="card" style="--delay: 1">
      <div class="content">
        <div class="img">B</div>
        <div class="details">
          <span class="name">blibili</span>
          <p>id：哪国莫有</p>
        </div>
      </div>
      <a href="https://space.bilibili.com/389671763?from=search&seid=707053835854471016" target="_blank">MyBlibili</a>
    </div>
    <div class="card" style="--delay: 2">
      <div class="content">
        <div class="img">H</div>
        <div class="details">
          <span class="name">主页</span>
          <p>回到首页</p>
        </div>
      </div>
      <a @click="topage('/')">home</a>
    </div>
    <div class="card" style="--delay: 2">
      <div class="content">
        <div class="img">A</div>
        <div class="details">
          <span class="name">侧边栏</span>
          <p>回到侧边栏</p>
        </div>
      </div>
      <a @click="topage('/aside')">aside</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "wj-car-warper",
  methods: {
    topage(page) {
      this.$router.push(page);
    },
  },
};
</script>

<style lang="less" scoped>
@keyframes animate {
  0% {
    opacity: 0;
    transform: translateY(100%) scale(0.5);
  }
  5%,
  20% {
    opacity: 0.4;
    transform: translateY(100%) scale(0.7);
  }
  25%,
  40% {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0%) scale(1);
  }
  45%,
  60% {
    opacity: 0.4;
    transform: translateY(-100%) scale(0.7);
  }
  65%,
  100% {
    opacity: 0;
    transform: translateY(-100%) scale(0.5);
  }
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1c595a;
  &:hover .card {
    animation-play-state: paused;
  }
  .card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    padding: 20px;
    width: 430px; //car宽
    background: #d7d8ac;
    border-radius: 100px 20px 20px 100px;
    opacity: 0;
    pointer-events: none;
    animation: animate 15s linear infinite;
    animation-delay: calc(3s * var(--delay));
    &:last-child {
      animation-delay: calc(-3s * var(--delay));
    }
    .content {
      display: flex;
      align-items: center;
    }
    .img {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 90px;
      width: 90px;
      position: absolute;
      left: 10px;
      padding: 5px;
      color: #fff;
      font-size: 50px;
      background: #58a6a6;
      border-radius: 50%;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    }
    .details {
      margin-left: 100px;
      span {
        font-size: 18px;
        font-weight: 600;
      }
    }
    a {
      padding: 7px 18px;
      color: #fff;
      background-color: #67734d;
      border-radius: 25px;
    }
  }
}
</style>