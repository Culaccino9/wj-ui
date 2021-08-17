<template>
  <div class="show-button" id="button">
    <h3>按钮家族</h3>
    <p>提供了三种按钮，分别为波浪按钮，3D按钮，以及毛玻璃特效按钮。</p>
    <p>这些按钮都可以设置大小icon图标等。</p>
    <div class="car-effect">
      <wj-car-effect>
        <car-effect-item width="700">
          <p>波浪按钮，有四种颜色，三种大小，可以设置圆角。</p>
          <div class="dimple-button">
            <wj-button-dimple>button</wj-button-dimple>
            <wj-button-dimple type="success">button</wj-button-dimple>
            <wj-button-dimple type="warning">button</wj-button-dimple>
            <wj-button-dimple type="danger">button</wj-button-dimple>
          </div>
          <div class="dimple-button">
            <wj-button-dimple :round="true">button</wj-button-dimple>
            <wj-button-dimple type="success" :round="true"
              >button</wj-button-dimple
            >
            <wj-button-dimple type="warning" :round="true"
              >button</wj-button-dimple
            >
            <wj-button-dimple type="danger" :round="true"
              >button</wj-button-dimple
            >
          </div>
        </car-effect-item>
        <car-effect-item width="700">
          <p>3D按钮，有四种颜色，三种大小，可以设置圆角。</p>
          <div class="dimple-button">
            <wj-button-threeD>button</wj-button-threeD>
            <wj-button-threeD type="success">button</wj-button-threeD>
            <wj-button-threeD type="warning">button</wj-button-threeD>
            <wj-button-threeD type="danger">button</wj-button-threeD>
          </div>
          <div class="dimple-button">
            <wj-button-threeD :round="true">button</wj-button-threeD>
            <wj-button-threeD type="success" :round="true">button</wj-button-threeD>
            <wj-button-threeD type="warning" :round="true">button</wj-button-threeD>
            <wj-button-threeD type="danger" :round="true">button</wj-button-threeD>
          </div>
        </car-effect-item>
        <car-effect-item width="800">
          <p>赛博朋克毛玻璃按钮，有四种颜色，三种大小，可以设置圆角，文字颜色等。</p>
          <div class="dimple-button">
            <wj-button-glass>button</wj-button-glass>
            <wj-button-glass type="success">button</wj-button-glass>
            <wj-button-glass type="warning">button</wj-button-glass>
            <wj-button-glass type="danger">button</wj-button-glass>
          </div>
          <div class="dimple-button">
            <wj-button-glass :round="false">button</wj-button-glass>
            <wj-button-glass type="success" :round="false">button</wj-button-glass>
            <wj-button-glass type="warning" :round="false">button</wj-button-glass>
            <wj-button-glass type="danger" :round="false">button</wj-button-glass>
          </div>
        </car-effect-item>
      </wj-car-effect>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.show-button {
  margin-top: 100px;

  .dimple-button {
    display: flex;
    width: 600px;
    justify-content: space-between;
    align-items: space-between;
    flex-wrap: wrap;
    margin: 30px 0;
  }
}
</style>