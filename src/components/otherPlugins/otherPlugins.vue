<template>
  <div class="show-other">
    <hr />
    <h3>其他组件</h3>
    <p>还提供了一些其他的组件，比如loading，侧边栏，导航栏switch等</p>
    <p>后期还会推出table系类等组件</p>
    <div class="other">
      <h4>loading加载画面</h4>
      <p>点击按钮显示loading画面。点击画面可以关闭。</p>
      <p>还可以设置图标的size大小，颜色，间距，以及遮罩层颜色</p>
      <div @click="loading">
        <wj-button-dimple>显示loading</wj-button-dimple>
      </div>
      <div @click="loading">
        <wj-loading v-show="loadingFlag"></wj-loading>
      </div>
    </div>
    <div class="other">
      <h4>switch开关</h4>
      <p>一共设置了4中不同的switch样式，并且可以选择颜色</p>
      <p>
        以及还可以通过v-switchVal绑定switch开关的值，并在需要的时候直接获取他
      </p>
      <div class="switch">
        <div class="show-switch">
          <h4>样式展示</h4>
          <div class="row">
            <wj-switch></wj-switch>
            <wj-switch color="green"></wj-switch>
          </div>
          <div class="row">
            <wj-switch type="across"></wj-switch>
            <wj-switch type="across" color="green"></wj-switch>
          </div>
          <div class="row">
            <wj-switch type="line"></wj-switch>
            <wj-switch type="line" color="green"></wj-switch>
          </div>
          <div class="row">
            <wj-switch type="block"></wj-switch>
            <wj-switch type="block" color="green"></wj-switch>
          </div>
        </div>
        <div class="show-switch">
          <h4>动态绑定值</h4>
          <div>
            <wj-switch v-switchVal="switchValue"></wj-switch>
            <div>switchValue:{{ switchValue }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="other">
      <h4>确认对话框</h4>
      <div>
        <wj-dialog></wj-dialog>
      </div>
    </div>
    <div class="other">
      <h4>导航栏系列请点击</h4>
      <div @click="toAside">
        <wj-button-threeD>点击我查看</wj-button-threeD>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadingFlag: false,
      switchValue: true,
      menuData: [
        {
          title: "item",
          path: "/#",
          icon: "iconfont icon-index",
          clickMethod: (e) => {
            console.log(e);
          },
        },
        {
          title: "主页",
          path: "/#",
          icon: "iconfont icon-index",
          clickMethod: (e) => {
            console.log(e);
          },
        },
      ],
    };
  },
  methods: {
    loading() {
      this.loadingFlag = !this.loadingFlag;
    },
    toAside() {
      this.$router.push("/aside");
    },
  },
};
</script>

<style lang="less" scoped>
.show-other {
  margin-top: 100px;
  .other {
    margin-top: 80px;
  }
}
.switch {
  display: flex;
  justify-content: space-between;
  .show-switch {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 49%;
    box-shadow: 0 15px 45px rgb(0 0 0 / 10%);
    .row {
      display: flex;
      justify-content: center;
      margin: 20px 0;
    }
  }
}
</style>