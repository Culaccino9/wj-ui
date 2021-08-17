<template>
  <div>
    <div class="menu" v-show="flag">
      <wj-menu-effect>
        <div @click="toPage('/')">
          <menu-effect-item>首页</menu-effect-item>
        </div>
        <div @click="toPage('/aside')">
          <menu-effect-item>侧边栏</menu-effect-item>
        </div>
        <div @click="toPage('/about')">
          <menu-effect-item>关于我</menu-effect-item>
        </div>
      </wj-menu-effect>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
      flag:false
    }
  },
  watch:{
    '$route.path':function(val){
      if(val === '/'){
        this.flag = false
      }else{
        this.flag = true
      }
    }
  },
  methods:{
    toPage(page){
      this.$router.push(page)
    }
  }
};
</script>

<style lang="less" scoped>
.menu{
  position: fixed;
  right: 50px;
  top: 0;
}
</style>