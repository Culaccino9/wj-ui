<template>
    <div :class="`${type} ${color}`" @click="changeFlag">
    <input type="checkbox" id="male" class="chooseBtn" ref="switch" />
    <div for="male" class="choose-div"></div>
  </div>
</template>

<script>
export default {
  name: "wj-switch",
  props: {
    type: { type: String, default: "row" }, //row  across  line  block
    color: { type: String, default: "blue" }, //green blue
  },
  methods: {
    changeFlag() {
      this.$refs.switch.checked = !this.$refs.switch.checked;
    },
  },
};
</script>

<style lang="less" scoped>
//公用
input[type="checkbox"] {
  display: none;
}
input[type="checkbox"] + div {
  display: inline-block;
  width: 40px;
  height: 20px;
  position: relative;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  margin: 0px 20px;
  box-sizing: border-box;
  cursor: pointer;
}
input[type="checkbox"] + div:after {
  content: "";
  display: block;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 20px;
  height: 20px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  cursor: pointer;
}
#male:checked + div:after {
  left: calc(100% - 20px);
}
#male + div {
  background: #ddd;
}
#male + div:after {
  background: #fff;
  border-radius: 50%;
}

//颜色
.green {
  #male:checked + div {
    background: rgb(19, 206, 102);
  }
}
.blue {
  #male:checked + div {
    background: #409eff;
  }
}

//样式
//正常
.row {
  #male + div {
    border-radius: 20px;
    box-shadow: 1px 1px 3px #aaa;
  }
  #male + div:after {
    box-shadow: 1px 1px 3px #aaa;
  }
}
//横状
.across {
  #male + div {
    border-radius: 20px;
    height: 10px;
  }
  #male + div:after {
    top: -5px;
    box-shadow: 0px 0px 3px #aaa;
  }
}
//线状
.line {
  #male + div {
    height: 3px;
  }
  #male + div:after {
    top: -9px;
    box-shadow: 0px 0px 3px #aaa;
  }
}
//方块
.block {
  #male + div {
    border-radius: 0;
  }
  #male:checked + div:after {
    left: calc(100% - 18px);
  }
  #male + div:after {
    width: 16px;
    height: 16px;
    top: 2px;
    left: 2px;
    border-radius: 0;
  }
}
</style>