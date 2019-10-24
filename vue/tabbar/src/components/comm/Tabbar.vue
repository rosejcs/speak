<template>
  <div class="tabbar">
    <ul class="tabbar-list">
      <!-- 点击方法改actived -->
      <li
        v-for="(item,index) of list"
        :key="index+item" @click="changeTabbar(item)"
        :class="{'tabbar-item':true,actived:actived===item.title}"
      >
        <img class="tabbar-icon" :src="actived===item.title ? item.imgUrl_actived : item.imgUrl_comm" alt="u lost me"/>
        <p>{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['actived'],
  data() {
    return {
      // actived: "home",
      // actived: this.$store.state.actived || "home",
      list: [
        {
          title: "home",
          imgUrl_comm: require("../../assets/icon/tabbar/home.png"),
          imgUrl_actived: require("@/assets/icon/tabbar/home_actived.png")
        },
        {
          title: "cart",
          imgUrl_comm: require("../../assets/icon/tabbar/cart.png"),
          imgUrl_actived: require("@/assets/icon/tabbar/cart_actived.png")
        }
      ],
    };
  },
  methods:{
    // changeTabbar(item) {
    //   this.actived = item.title;
    // }
    changeTabbar(item) {
      this.$emit('changeActive',item.title)
    }
  },
  watch: {
    // actived() {
    //   this.$store.commit('changeActived',this.actived)
    // }
  }
};
</script>

<style scope>
ul,ol {
  list-style: none;
  padding: 0;
  margin: 0;
}
.tabbar { 
  position: fixed;
  bottom: 115px;
  border: 1px solid red;
  width: 96%;
  box-sizing: border-box;
}
.tabbar-list {
  display: flex;
  justify-content: space-between;
}
.tabbar-item {
  width: 50%;
  color: lightgreen;
}
.tabbar-item > p {
  margin: 0;
}
.tabbar-icon {
  width: 40px;
  height: 40px;
}
.actived {
  color: red;
  background: lightgrey;
}
</style>