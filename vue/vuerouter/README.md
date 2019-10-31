# vuerouter

## 路由守卫知识点
> 用于通过跳转或取消的方式守卫路由变化
>
> 但是 **参数或查询的改变不会触发** 

```
----全局
----单路由
----组件
```

#### 全局前置守卫

*注册

```
使用 router.beforeEach 注册

code:
const router = new VueRouter( {...} )

router.beforeEach( (to, from, next)=>{
  // ....
} )
```

> `to `	:	route 即将改变的路由目的
>
> `from`	:	route 路由变化的起始路由
>
> `next`	:	Function 调用此方法来完成对应的钩子函数
>
> - next()
> - next(false)
> - next('/')
> - next(error)

####    全局后置钩子

注册全局后置钩子

> 不接受 **next** 函数也不会改变路由导航

```
router.afterEach( (to, from)=>{
  // ...
} )
```

#### 路由独享守卫

在路由配置上直接定义 beforeEnter 守卫

```
const router = new VueRouter({
  routes:[
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
```

#### 组件内守卫

在路由组件中定义路由导航守卫:

> beforeRouteEnter
>
> beforeRouteUpdate
>
> beforeRouteLeave

```
const Foo = {
  template: '...',
  beforeRouteEnter(to, from, next) {
    // 渲染该组件的对应路由被confirm前调用
    // 不!能!获取组件实例 this
    // 因为当守卫执行前, 组件实例还没被创建
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变, 但是该组件被复用时调用
    // 举例来说, 对于一个带有动态参数的路径 /foo/:id, 在/foo/1 和 /foo/2之间跳转的时候,
    // 由于会渲染同样的Foo组件, 因此组件实例会被复用, 而这个钩子就会在这个情况下被调用.
    // 可以访问组件实例 this
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 this
  }  
}
```

beforeRouteEnter 守卫不能访问this, 因为守卫在导航确认前被调用, 因此即将登场的新组件还没被创建.

不过, 可以通过传一个回调给 next 来访问组件实例. 在导航被确认的时候执行回调,并且把组件实例作为回调方法的参数

```
beforeRouteEnter(to, from, next) {
  next(vm => {
    // 通过 vm 访问组件实例
  })
}
```

`beforeRouteEnter` 是支持给next 传递回调的唯一守卫. 对于`beforeRouteUpdate` 和 `beforeRouteLeave`来说, `this`已经可用, 不支持传递回调

```
beforeRouteUpdate(to, from, next) {
  // just use this
  this.name = to.params.name
  next()
}
```

这个离开守卫通常用来禁止用户在还伟保存修改前突然离开. 该导航可以通过`next(false)`来取消

```
beforeRouteLeave(to, from, next) {
  const answer = window.confirm(`Do u really want to leave?`)
  if(answer) {
    next()
  } else {
    next(false)
  }
}
```

```js
}
```

#### 完整的导航解析流程

1. 导航被触发。
2. 在失活的组件里调用离开守卫。
3. 调用全局的 `beforeEach` 守卫。
4. 在重用的组件里调用 `beforeRouteUpdate` 守卫 (2.2+)。
5. 在路由配置里调用 `beforeEnter`。
6. 解析异步路由组件。
7. 在被激活的组件里调用 `beforeRouteEnter`。
8. 调用全局的 `beforeResolve` 守卫 (2.5+)。
9. 导航被确认。
10. 调用全局的 `afterEach` 钩子。
11. 触发 DOM 更新。
12. 用创建好的实例调用 `beforeRouteEnter` 守卫中传给 `next` 的回调函数

补充:

##### 多路由页面的应用场景

```
|---App.vue
<div id="app">
    <router-view />
    <router-view name="a"/>
    <router-view name="b"/>
    <router-view name="c"/>
    ...
</div>



|---router/index.js

const routes = [
  {
    path: '/',
    name: 'home',
    component:Home
  },
  {
    path: '/more',
    name: 'more',
    components: {
      default: ()=>import('../views/Home')
      a: ()=>import('../compontents/A'),
      b: ()=>import('../compontents/B'),
      c: ()=>import('../compontents/C')
    }
  },
]
var router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h=>h(App)
}).$mount('#app')


```

#### 别名:

```
{
  path: '/rename',
  component: rename,
  alias: '/othername'
}

url:  http://localhost:8080/#/othername 显示的就是rename这个页面
```

注意: path:'/' **不!能!**起别名