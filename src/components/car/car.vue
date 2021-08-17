<template>
  <div class="car">
    <hr>
    <h3>卡片家族</h3>
    <p>
      提供了四种卡片样式，分别为默认卡片样式，反转卡片样式，聚失焦卡片队列样式，以及侧边旋转卡片样式
    </p>
    <p>这些卡片都可以根据需求设置大小等</p>
    <div class="title">
      <h4>默认卡片</h4>
      <p>您可以根据需求更改内容与主标题副标题大小。以及卡片的大小</p>
    </div>
    <div class="show-car">
      <wj-car title="嘿" subhead="崽儿">
        <p>您能看到这个，说明您是一个很有品味的人啊</p>
        <p>你娃能看到内个，确实不错，黑阔以，巴适</p>
        <p>You see this, you are a man of good taste</p>
      </wj-car>
      <wj-car width="500" height="400">
        <Content />
      </wj-car>
      <wj-car width="420" height="500">
        <Content />
      </wj-car>
    </div>
    <div class="title">
      <h4>翻转卡片</h4>
      <p>您可以根据需求更改内容，以及卡片的大小</p>
    </div>
    <div class="show-car">
      <wj-car-turn>
        <template v-slot:fornt>
          <div class="face">
            <i class="icon-yinyueclick"></i>
            <p>Let's have some music</p>
          </div>
        </template>
        <template v-slot:back>
          <div class="car-text">
            <h3
              style="
                 {
                  width: '100%';
                }
              "
            >
              华语歌单
            </h3>
            <div>
              <span>爱我别走</span><span>当葡萄成熟时</span><span>献世</span>
            </div>
            <div>
              <span>1874</span><span>天下无双</span><span>与我常在</span
              ><span>每一个明天</span>
            </div>
            <div>
              <span>与你常在</span><span>K歌之王</span><span>心烧</span>
            </div>
          </div>
        </template>
      </wj-car-turn>
      <wj-car-turn :boxStyle="{ width: '500px' }" frontBgColor="#6d8090">
        <template v-slot:fornt>
          <div class="face">
            <i class="icon-yinyueclick"></i>
            <p>Let's have some music</p>
          </div>
        </template>
        <template v-slot:back>
          <div class="car-text">
            <h3
              style="
                 {
                  width: '100%';
                }
              "
            >
              华语歌单
            </h3>
            <div><span>爱我别走</span><span>献世</span></div>
            <div><span>爱我别走</span><span>每一个明天</span></div>
            <div><span>稻香</span><span>献世</span></div>
          </div>
        </template>
      </wj-car-turn>
      <wj-car-turn :boxStyle="{ width: '200px', height: '200px' }">
        <template v-slot:fornt>
          <div class="face">
            <i class="icon-yinyueclick"></i>
            <p>Let's have some music</p>
          </div>
        </template>
        <template v-slot:back>
          <div class="car-text">
            <h3
              style="
                 {
                  width: '100%';
                }
              "
            >
              华语歌单
            </h3>
            <div><span>爱我别走</span><span>献世</span></div>
            <div><span>爱我别走</span><span>每一个明天</span></div>
            <div><span>稻香</span><span>献世</span></div>
          </div>
        </template>
      </wj-car-turn>
      <wj-car-turn frontBgColor="#6d8090" backBgColor="#206d6d">
        <template v-slot:fornt>
          <div class="face">
            <i class="icon-yinyueclick"></i>
            <p>Let's have some music</p>
          </div>
        </template>
        <template v-slot:back>
          <div class="car-text">
            <h3
              style="
                 {
                  width: '100%';
                }
              "
            >
              华语歌单
            </h3>
            <div>
              <span>爱我别走</span><span>当葡萄成熟时</span><span>献世</span>
            </div>
            <div>
              <span>1874</span><span>天下无双</span><span>与我常在</span
              ><span>每一个明天</span>
            </div>
            <div>
              <span>与你常在</span><span>K歌之王</span><span>心烧</span>
            </div>
          </div>
        </template>
      </wj-car-turn>
    </div>
    <div class="title">
      <h4>聚失焦卡片队列</h4>
      <p>
        您可以根据需求更改内容与主标题以及文字内容，或者更改内容。还可以更改卡片的大小
      </p>
    </div>
    <div class="line-car">
      <wj-car-effect>
        <car-effect-item title="自定义标题" content="自定义内容" />
        <car-effect-item>
          您可以再此输入自定义内容，也可以使用car提供的模板修改title和content
        </car-effect-item>
        <car-effect-item />
        <car-effect-item />
        <car-effect-item />
        <car-effect-item />
        <car-effect-item height="200" />
        <car-effect-item height="200" width="600" />
        <car-effect-item height="200" />
      </wj-car-effect>
    </div>
    <div class="title">
      <h4>方向旋转卡片队列</h4>
      <p>
        您可以根据需求更改内容，还可以更改卡片的高度，宽度，以及中间内容是否为圆形
      </p>
    </div>
      <wj-car-dir>
        <car-dir-item>
          <h1>1</h1>
        </car-dir-item>
        <car-dir-item :round="false">
          <div class="dir-car-text">
            <h3>夜晚</h3>
            <p>晚上如果有世界杯，有啤酒，有炸鸡，那一定也有美梦</p>
          </div>
        </car-dir-item>
        <car-dir-item height="200" width="500" :round="false">
          <h1 class="dir-title">是不是该减肥了</h1>
        </car-dir-item>
        <car-dir-item :round="false">
          <div class="dir-car-text">
            <h3>夜晚</h3>
            <p>晚上如果有世界杯，有啤酒，有炸鸡，那一定也有美梦</p>
          </div>
        </car-dir-item>
        <car-dir-item>
          <h1>1</h1>
        </car-dir-item>
      </wj-car-dir>
  </div>
</template>

<script>
import Content from "./content.vue";
export default {
  components: {
    Content,
  },
};
</script>

<style lang="less" scoped>
.car {
  margin-top: 30px;
  .show-car {
    display: flex;
    justify-content: space-between;
  }
  .title {
    margin-top: 80px;
  }
}

@font-face {
  font-family: "iconfont";
  src: url("//at.alicdn.com/t/font_2609401_rw0vlsdciis.woff2?t=1628955683020")
      format("woff2"),
    url("//at.alicdn.com/t/font_2609401_rw0vlsdciis.woff?t=1628955683020")
      format("woff"),
    url("//at.alicdn.com/t/font_2609401_rw0vlsdciis.ttf?t=1628955683020")
      format("truetype");
}

*[class^="icon-"] {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-yinyueclick:before {
  content: "\e601";
}
.face {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  i {
    font-size: 70px;
    font-weight: 600;
  }
}
.car-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  div {
    display: flex;
    justify-content: center;
    margin: 10px 0;
    width: 100%;
    span {
      margin: 0 10px;
    }
  }
}
.line-car {
  padding: 20px;
  background: linear-gradient(0deg, #fff 50%, #2196f3);
}
.dir-car-text {
  padding: 10px;
}
.dir-title{
    padding: 20px;
}
</style>