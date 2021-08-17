<template>
  <div class="card" :style="{width:width+'px',height:height+'px'}">
    <div :class="`${round ? 'text round' : 'text'}`">
      <slot> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "car-dir-item",
  props: {
    round: { type: Boolean, default: true },
    width:{ type: String || Number, default: "180" },
    height:{ type: String || Number, default: "240" },
  },
};
</script>

<style lang="less" scoped>
.card {
  position: relative;
  background: #fff;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
  overflow: hidden;
  transform-style: preserve-3d;
  cursor: pointer;
}
.container .card .text {
  background: #2196f3;
  color: #fff;
  transition: box-shadow 0.5s;
}
.container .card:hover .text {
  background: #fff;
  color: #2196f3;
  box-shadow: 0 0 0 150px #2196f3;
}
.round {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80px;
  min-width: 80px;
  border-radius: 50%;
}
</style>