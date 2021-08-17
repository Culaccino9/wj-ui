<template>
  <button
    :class="`${size} ${type} ${icon} btn`"
    :disabled="disabled"
    :style="{ borderRadius: `${round ? '1rem' : '0px'}` }"
    :type="htmlType"
  >
    <span class="text"><slot></slot></span>
    <div class="liquid"></div>
  </button>
</template>

<script>
export default {
  name: "wj-button-threeD",
  props: {
    size: { type: String, default: "medium" }, //medium / small / mini
    type: { type: String, default: "primary" }, //primary / success / warning / danger
    round: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    htmlType: { type: String, default: "button" }, //button / submit / reset
    icon: { type: String, default: null },
  },
};
</script>

<style lang="less" scoped>
//size
.medium {
  height: 40px;
//   min-width: 108px;
  min-width: 108px;
  max-width: 200px;
  font-size: 16px;
}
.small {
  height: 36px;
  min-width: 98px;
  max-width: 200px;
  font-size: 16px;
}
.mini {
  height: 32px;
  min-width: 80px;
  max-width: 200px;
  font-size: 14px;
}

//type
.primary {
  color: rgb(63, 100, 129);
  .liquid {
    background: #4973ff;
  }
}
.success {
  color: #0c5e1e9c;
  .liquid {
    background: #67c23a;
  }
}
.warning {
  color: #55380dd2;
  .liquid {
    background: #e6a23c;
  }
}
.danger {
  color: #4b0d0ec7;
  .liquid {
    background: #ff4d4f;
  }
}

.btn {
  position: relative;
//   padding: 20px 50px;
  background: transparent;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;
  &:hover .liquid{
      top: -120px;
  }
}
.text {
  position: relative;
  z-index: 1;
  letter-spacing: 8px;
}
.liquid {
  position: absolute;
  left: -40px;
  top: -80px;
  width: 200px;
  height: 200px;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
  transition: 0.5s;
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 200%;
    height: 200%;
    transform: translate(-50%, -75%);
  }
  &:before {
    border-radius: 45%;
    // background: rgba(20, 20, 20, 1);
    background: #fff;
    animation: animate 5s linear infinite;
  }
  &:after {
    border-radius: 40%;
    background: rgba(255, 255, 255, 0.329);
    // background: rgba(20, 20, 20, 0.5);
    animation: animate 10s linear infinite;
  }
}
@keyframes animate {
    0% {
      transform: translate(-50%, -75%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -75%) rotate(360deg);
    }
  }
</style>