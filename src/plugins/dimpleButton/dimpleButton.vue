<template>
  <button
    :class="`${size} ${type} ${icon} btn`"
    :disabled="disabled"
    :style="{ borderRadius: `${round ? '1rem' : '0px'}` }"
    :type="htmlType"
  >
    <span class="text"><slot></slot></span>
    <div class="wave"></div>
  </button>
</template>

<script>
export default {
  name: "wj-button-dimple",
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
// 按钮大小
.medium {
  height: 40px;
  min-width: 108px;
  font-size: 16px;
}
.small {
  height: 36px;
  min-width: 98px;
  font-size: 16px;
}
.mini {
  height: 32px;
  min-width: 80px;
  font-size: 14px;
}
//按钮状态
.primary {
  color: #00aeff;
  border: 2px solid #00aeff;
  .wave {
    background-color: #00aeff;
    &:before {
      background: url("../../assets/img/wave.png");
    }
  }
}
.success {
  color: #67c23a;
  border: 2px solid #67c23a;
  .wave {
    background-color: #67c23a;
    &:before {
      background: url("../../assets/img/waveSuccess.png");
    }
  }
}
.warning {
  color: #e6a23c;
  border: 2px solid #e6a23c;
  .wave {
    background-color: #e6a23c;
    &:before {
      background: url("../../assets/img/waveWarning.png");
    }
  }
}
.danger {
  color: #ff4d4f;
  border: 2px solid #ff4d4f;
  .wave {
    background-color: #ff4d4f;
    &:before {
      background: url("../../assets/img/waveDanger.png");
    }
  }
}

//样式文件
.btn {
  position: relative;
  // padding: 10px 30px;
  background-color: #fff;
  text-transform: uppercase;
  letter-spacing: 4px;
  cursor: pointer;
  overflow: hidden;
  &:hover .wave {
    top: 0;
  }
  &:hover .text {
    color: #fff;
  }
}
.text {
  position: relative;
  z-index: 1;
  transition: 1s;
}
.wave {
  position: absolute;
  top: calc(100% + 22px);
  left: 0;
  width: 100%;
  height: 100%;
  transition: 1s;
  &:before {
    content: "";
    position: absolute;
    top: -22px;
    left: 0;
    width: 100%;
    height: 22px;
    animation: animate 0.5s linear infinite;
  }
}
@keyframes animate {
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: 98px;
  }
}
</style>