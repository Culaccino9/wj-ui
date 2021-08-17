<template>
  <div class="card" :style="{width:width+'px',height:height+'px'}">
    <div class="content">
      <slot>
      <h2>{{title}}</h2>
      <p>{{content}}</p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "car-effect-item",
  props:{
      title:{type:String,default:"title"},
      content:{type:String,default:"你可以书写一些内容在这里"},
      width:{type:String || Number,default:"250"},
      height:{type:String || Number,default:"300"},
  }
};
</script>

<style lang="less" scoped>
h2 {
  font-size: 3em;
}
p {
  font-size: 0.9em;
}
.content {
  text-align: center;
  z-index: 10;
  padding: 0 20px;
  transition: 0.5s;
}
.card {
  color: #000;
  &:hover .content {
    color: #fff;
  }
}
</style>