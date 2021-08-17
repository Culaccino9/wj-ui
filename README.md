# 下载

```js
npm i vue-wj-ui
```

# 使用

- 入口文件引入：（如没修改为main.js）

```js
import '../node_modules/vue-wj-ui/lib/vue-wj-ui.css'
import WjUI from 'vue-wj-ui'

Vue.use(WjUI)
```

- 使用：这样就可以在你的.vue里使用它了

```vue
<wj-button-dimple>button</wj-button-dimple>
```

# 在线演示：

- [github](https://culaccino9.github.io/to1874.gihub.io/)
- [国内请戳](https://www.to1874.com/wjui)



# Button按钮系列

## wj-button-dimple

说明：涟漪动画效果按钮

使用：

```vue
<wj-button-dimple>button</wj-button-dimple>
```

参数：

|   参数   |     说明     |  类型   |                可选值                | 默认值 |
| :------: | :----------: | :-----: | :----------------------------------: | :----: |
|   size   |     尺寸     | string  |        medium / small / mini         | medium |
|   type   |     类型     | string  | primary / success / warning / danger |        |
|  round   | 是否圆角按钮 | boolean |                                      | false  |
| htmlType | 原生type属性 | string  |       button / submit / reset        | button |
|   icon   |   图标类名   | string  |                                      |  null  |

## wj-button-threeD

说明：3D涟漪动画按钮

使用：

```vue
<wj-button-threeD>button</wj-button-threeD>
```

参数：

|   参数   |     说明     |  类型   |                可选值                | 默认值 |
| :------: | :----------: | :-----: | :----------------------------------: | :----: |
|   size   |     尺寸     | string  |        medium / small / mini         | medium |
|   type   |     类型     | string  | primary / success / warning / danger |        |
|  round   | 是否圆角按钮 | boolean |                                      | false  |
| htmlType | 原生type属性 | string  |       button / submit / reset        | button |
|   icon   |   图标类名   | string  |                                      |  null  |

## wj-button-glass

说明：毛玻璃主题按钮

使用：

```vue
<wj-button-glass>button</wj-button-glass>
```

参数：

| 参数  |     说明     |  类型   |                可选值                | 默认值 |
| :---: | :----------: | :-----: | :----------------------------------: | :----: |
| size  |     尺寸     | string  |        medium / small / mini         | medium |
| type  |     类型     | string  | primary / success / warning / danger |        |
| round | 是否圆角按钮 | boolean |                                      |  true  |
|  to   |   跳转地址   | string  |                                      |        |
| icon  |   图标类名   | string  |                                      |  null  |
| color |   文字颜色   | string  |                                      |        |



# Car卡片系列

## wj-car

说明：默认卡片

使用：

```vue
<wj-car title="嘿" subhead="我是副标题">
	输入内容
</wj-car>
```

参数：

|  参数   |    说明     |        类型        | 可选值 | 默认值 |
| :-----: | :---------: | :----------------: | :----: | :----: |
|  title  | 主标题内容  |       string       |        |        |
| subhead | 副标题内容  |       string       |        |        |
|  width  | car卡片宽度 | string \|\| number |        |  240   |
| height  | car卡片高度 | string \|\| number |        |  300   |





## wj-car-turn

说明：翻转卡片

使用：

```vue
<wj-car-turn>
	<template v-slot:fornt>
            正面内容
    </template>
    <template v-slot:back>
            反面内容
    </template>
</wj-car-turn>
```

参数：

|     参数     |            说明            |  类型  | 可选值 |  默认值  |
| :----------: | :------------------------: | :----: | :----: | :------: |
|   boxStyle   | 外层盒子样式，可设置大小等 | object |        |          |
| frontBgColor |        正面背景颜色        | string |        |   白色   |
| backBgColor  |       反转面背景颜色       | string |        | 彩色渐变 |

## wj-car-effect

说明：聚焦卡片队列，car-effect-item为item元素

使用：

```vue
<wj-car-effect>
	<car-effect-item title="自定义标题" content="自定义内容"/>
    <car-effect-item>
        您可以再此输入自定义内容，也可以使用car提供的模板修改title和content
    </car-effect-item>
</wj-car-effect>
```

参数：

**car-effect-item参数：**

|  参数   |    说明     |  类型  | 可选值 | 默认值 |
| :-----: | :---------: | :----: | :----: | :----: |
|  title  |  标题文字   | string |        |        |
| content |  内容文字   | string |        |        |
|  width  | car卡片宽度 | string |        |  250   |
| height  | car卡片高度 | string |        |  300   |

后期会根据需求全局less变量配置car背景色等，待完善.....



## wj-car-dir

说明：方向旋转卡片

使用：

```vue
<wj-car-dir>
    <car-dir-item>
        在此输入您的内容
    </car-dir-item>
</wj-car-dir>
```

参数：

**car-effect-item参数：**

|  参数  |       说明       |        类型        | 可选值 | 默认值 |
| :----: | :--------------: | :----------------: | :----: | :----: |
| round  | 中间容器是否圆形 |      Boolean       |        |  true  |
| height |   car卡片高度    | string \|\| number |        |  240   |
| width  |   car卡片宽度    | string \|\| number |        |  180   |



# wj-loading

说明：加载图标

使用：

```vue
<wj-loading></wj-loading>
```

参数：

|   参数    |       说明        |       类型       |                可选值                 | 默认值 |
| :-------: | :---------------: | :--------------: | :-----------------------------------: | :----: |
|   size    |       尺寸        | string\|\|number | 整数或小数，为loading画面放大缩小倍数 |   1    |
|   color   |  loading图标颜色  |      string      | primary / success / warning / danger  |        |
|   space   | loading图标间间距 | string\|\|number |                                       |        |
| maskColor |    遮罩层颜色     |      string      |      十六进制 \|\|r gba \|\| rgb      |        |



# wj-liquidAside

说明：液态侧边栏，暂时只支持一级menu

使用：

```vue
<wj-liquidAside>logo插槽（选填）</wj-liquidAside>
```

参数：

|   参数    |      说明       |       类型        |                            可选值                            | 默认值 |
| :-------: | :-------------: | :---------------: | :----------------------------------------------------------: | :----: |
|  bgColor  | aside的背景颜色 |      string       |                                                              |        |
| textColor |    文字颜色     |      string       |                                                              |  #fff  |
| menuData  |  菜单item标签   | Array（对象数组） | 一个对象对应一个菜单item，格式：[{title：标题,path：跳转页面,icon：字体图标类名,clickMethod：点击事件函数}] |        |

示例：

```vue
<template>	<wj-liquidAside :menuData="menuData">    	<div>            这里可以放Logo    	</div>    </wj-liquidAside></template><script>    data(){        return{            menuData: [                {                  title: "item",                  path: "/#",                  icon: "iconfont icon-index",                  clickMethod: (e) => {                    console.log(e);                  },                },                {                  title: "主页",                  path: "/#",                  icon: "iconfont icon-index",                  clickMethod: (e) => {                    console.log(e);                  },                },            ]        }    }</script>
```



# wj-switch

说明：switch选择器

使用：

```vue
<template>	<wj-switch v-switchVal="flag"></wj-switch>	<button @click="showFlag">        查看绑定值变化    </button></template><script>	export default{        data(){            return{                flag:true            }        },        methods:{            showFlag(){                console.log(this.flag)            }        }    }</script>
```

参数：

|    参数     |               说明               |  类型   |          可选值           | 默认值 |
| :---------: | :------------------------------: | :-----: | :-----------------------: | :----: |
| v-switchVal | 绑定的值，可动态监听，也是默认值 | Blooean |                           |  true  |
|    type     |            switch种类            | string  | row、across 、line、block |  row   |
|    color    |        switch选择时的颜色        | string  |        green、blue        |  blue  |



# wj-menu-effect

说明：菜单导航栏

使用：

menu-effect-item为item元素

```vue
//注意：外层需要一个容器<div class="menu">	<wj-menu-effect>		<menu-effect-item>首页</menu-effect-item>	</wj-menu-effect></div>
```

参数：无。



# wj-nav

说明：侧边导航栏

使用：

nav-item为item元素

```vue
<wj-nav>	<nav-item>1</nav-item>	<nav-item>1</nav-item>	<nav-item>1</nav-item></wj-nav>
```

参数：

| 参数  |   说明   |  类型  | 可选值 | 默认值 |
| :---: | :------: | :----: | :----: | :----: |
| icon  | 图标类名 | string |        |        |
| color | 字体颜色 | string |        |        |



# wj-dialog
