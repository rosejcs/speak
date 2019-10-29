# @vue/cli脚手架说明

### 我们编辑的页面主要在 `src` 目录下

src------------------------------

-------components-------------组件目录,用于存放编写的通用组件, 如 按钮组件  Button.vue, 菜单栏组件 Tabbar.vue.........

-------views--------------------页面内容,用于存放主页面的组件, 如 首页 Home.vue  详情页 Details.vue.....

### 知识点:

组件引入 ,父子子父通信, tabbar的切换应用vuex保存状态,

MyHome/tabbar/HomePage/CartPage

在MyHome引入组件HomePage/CartPage

```
<template>
  <div>
      <HomePage />
      <CartPage />
      <Tabbar />
  </div>
</template>
```

在script引入

```
<script>
export default {
  components:{
    HomePage:()=>import('../components/myHome/HomePage'),
    CartPage:()=>import('../components/myHome/CartPage'),
      Tabbar:resolve=>require(['../component/comm/Tabbar'],resolve)
  }
}
</script>
```

在组件标签上绑定属性, 用于 `父组件向子组件` 传值

```
<Tabbar :actived="actived" />
```

`:actived` ----->   在子组件接收的参数变量

`"actived" `----->  要传递的父组件的变量

