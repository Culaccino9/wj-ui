<template>
  <div :class="`${size} ${type} ${icon} btn`" :disabled="disabled">
    <a
      class="text"
      :href="to"
      :style="{ borderRadius: `${round ? '1rem' : '0px'}`,color:`${color}` }"
    >
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: "wj-button-glass",
  props: {
    size: { type: String, default: "medium" }, //medium / small / mini
    type: { type: String, default: "primary" }, //primary / success / warning / danger
    round: { type: Boolean, default: true },
    disabled: { type: Boolean, default: false },
    icon: { type: String, default: null },
    to: { type: String, default: "javascript:;" },
    color: { type: String, default: "rgba(49, 42, 42, 0.418)" },
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

//type
.primary {
  &::before {
    background: #2db2ff;
    box-shadow: 0 0 2px rgba(232, 234, 235, 0.753), 0 0 10px #2db2ff;
  }
  &::after {
    background: #2db2ff;
    box-shadow: 0 0 2px #2db2ff, 0 0 10px #2db2ff;
  }
}
.success {
  &::before {
    background: #17b932;
    box-shadow: 0 0 2px #17b932, 0 0 10px #17b932;
  }
  &::after {
    background: #17b932;
    box-shadow: 0 0 2px #17b932, 0 0 10px #17b932;
  }
}
.warning {
  &::before {
    background: #e6a23c;
    box-shadow: 0 0 2px #e6a23c, 0 0 10px #e6a23c;
  }
  &::after {
    background: #e6a23c;
    box-shadow: 0 0 2px #e6a23c, 0 0 10px #e6a23c;
  }
}
.danger {
  &::before {
    background: #ff1f71;
    box-shadow: 0 0 2px #ff1f71, 0 0 10px #ff1f71;
  }
  &::after {
    background: #ff1f71;
    box-shadow: 0 0 2px #ff1f71, 0 0 10px #ff1f71;
  }
}

.btn {
  position: relative;
  cursor: pointer;
  &:hover .text {
    letter-spacing: 3px;
  }
  &:hover .text::before {
    transform: skewX(45deg) translateX(200%);
  }
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -5px;
    transform: translateX(-50%);
    width: 30px;
    height: 10px;
    border-radius: 10px;
    transition: 0.5s;
    transition-delay: 0s;
  }
  &:hover::before {
    bottom: 0;
    height: 50%;
    width: 80%;
    border-radius: 30px;
    transition-delay: 0.2s;
  }
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: -3px;
    transform: translateX(-50%);
    width: 30px;
    height: 10px;
    border-radius: 10px;
    transition: 0.5s;
    transition-delay: 0s;
  }
  &:hover::after {
    top: 0;
    height: 50%;
    width: 80%;
    border-radius: 30px;
    transition-delay: 0.2s;
  }
}
.text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  text-decoration: none;
  z-index: 1;
  letter-spacing: 1px;
  overflow: hidden;
  transition: 0.5s;
  backdrop-filter: blur(15px);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.15),
      transparent
    );
    transform: skewX(45deg) translateX(0);
    transition: 0.5s;
  }
}
</style>