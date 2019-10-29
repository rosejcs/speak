<template>
  <div class="lazy-load">

    <HomePage v-if="change"/><CartPage v-else/>
    <button @click="test">12312321</button>

  </div>
</template>

<script>
export default {
  components:{
    HomePage: resolve=>require(['../components/myHome/HomePage'],resolve),
    CartPage: () => import('../components/myHome/CartPage')
  },
  data() {
    return {
      change: true,
    }
  },
  methods:{
    test() {
      this.change = !this.change
    }
  }
  
}
</script>