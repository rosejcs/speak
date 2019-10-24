<template>
  <div>
    <h1>这是我的home页面---MyHome.vue</h1>

    <HomePage v-if="actived==='home'"/>
    
    <CartPage v-else/>

    <Tabbar :actived="actived" @changeActive="handleActive($event)"/>

  </div>
</template>
<script>
import HomePage from '@/components/myHome/HomePage.vue'
import CartPage from '@/components/myHome/CartPage.vue'
import Tabbar from '@/components/comm/Tabbar.vue'
export default {
  components:{
    HomePage,
    CartPage,
    Tabbar
  },
  data() {
    return {
      actived: this.$store.state.actived || 'home'
    }
  },
  methods:{
    handleActive(val) {
      this.actived = val; 
      console.log(val);
    }
  },
  watch: {
    actived() {
      this.$store.commit('changeActived',this.actived)
    }
  }
}
</script>