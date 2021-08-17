<template>
  <div class="btn" ref="btn">
    <div class="btn-back">
      <p>你确定删除吗？一旦删除不可更改</p>
      <button @click="close" class="yes">确定</button>
      <button @click="close" class="no">取消</button>
    </div>
    <div @click="show($event)">
      <slot><span class="btn-front">删除</span></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "wj-dialog",
  props:{
      visible:{
          type:Boolean,
          default:false
      },
      
  },
  methods: {
    distance(x1, y1, x2, y2) {
      let dx = x1 - x2;
      let dy = y1 - y2;
      return Math.sqrt(dx * dx + dy * dy);
    },
    show(event) {
      let mx = event.clientX - this.$refs.btn.offsetLeft,
        my = event.clientY - this.$refs.btn.offsetTop;

      let w = this.$refs.btn.offsetWidth,
        h = this.$refs.btn.offsetHeight;

      let directions = [
        { id: "top", x: w / 2, y: 0 },
        { id: "right", x: w, y: h / 2 },
        { id: "bottom", x: w / 2, y: h },
        { id: "left", x: 0, y: h / 2 },
      ];
      directions.sort((a, b) => {
        return (
          this.distance(mx, my, a.x, a.y) - this.distance(mx, my, b.x, b.y)
        );
      });
      this.$refs.btn.setAttribute("data-direction", directions.shift().id);
      this.$refs.btn.classList.add("is-open");
    },
    close() {
      this.$refs.btn.classList.remove("is-open");
    },
  },
};
</script>

<style lang="less" scoped>
.description {
  margin-top: 50px;
  text-align: center;
  color: #999;
  transition: opacity 0.3s ease;
}
.description a {
  color: #4a9df6;
  text-decoration: none;
}
.btn.is-open ~ .description {
  opacity: 0;
}
.btn {
  display: block;
  position: relative;
  width: 80px;
  height: 40px;
  transition: width 0.8s cubic-bezier(0.23, 1, 0.32, 1),
    height 0.8s cubic-bezier(0.23, 1, 0.32, 1),
    transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  text-align: center;
}
.btn-front {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  line-height: 40px;
  background-color: #f44336;
  color: #fff;
  cursor: pointer;
  backface-visibility: hidden;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transition: background 0.15s ease,
    line-height 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}
.btn-front:hover {
  background-color: #f77066;
}
.btn.is-open .btn-front {
  pointer-events: none;
  line-height: 160px;
}
.btn-back {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #eee;
  color: #222;
  transform: translateZ(-2px) rotateX(180deg);
  overflow: hidden;
  transition: box-shadow 0.8s ease;
}
.btn-back p {
  margin-top: 27px;
  margin-bottom: 25px;
}
.btn-back button {
  padding: 12px 20px;
  width: 30%;
  margin: 0 5px;
  background-color: transparent;
  border: 0;
  border-radius: 2px;
  font-size: 1em;
  cursor: pointer;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transition: background 0.15s ease;
}
.btn-back button:focus {
  outline: 0;
}
.btn-back button.yes {
  background-color: #2196f3;
  color: #fff;
}
.btn-back button.yes:hover {
  background-color: #51adf6;
}
.btn-back button.no {
  color: #2196f3;
}
.btn-back button.no:hover {
  background-color: #ddd;
}
.btn.is-open .btn-back {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
}
.btn[data-direction="left"] .btn-back,
.btn[data-direction="right"] .btn-back {
  transform: translateZ(-2px) rotateY(180deg);
}
.btn.is-open {
  width: 400px;
  height: 160px;
}
.btn[data-direction="top"].is-open {
  transform: rotateX(180deg);
}
.btn[data-direction="right"].is-open {
  transform: rotateY(180deg);
}
.btn[data-direction="bottom"].is-open {
  transform: rotateX(-180deg);
}
.btn[data-direction="left"].is-open {
  transform: rotateY(-180deg);
}
</style>