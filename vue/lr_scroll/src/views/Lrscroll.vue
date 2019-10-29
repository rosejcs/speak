<template>
  <div>
    <div class="container">


      <div class="left"  ref="left"> 
        <ul>
          <li v-for="n of 10" :key="n+'left'">
            {{n}}
          </li>
        </ul>
      </div>
      <div class="right" ref="right"> 
        <ul>
          <li v-for="(item,index) of list">
            <img src="" alt="">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:[
        {id:1,imgUrl:require('@/assets/imgs/01.jpg')},
        {id:2,imgUrl:require('@/assets/imgs/01.jpg')},
        {id:3,imgUrl:require('@/assets/imgs/01.jpg')}
      ]
    }
  }
}
</script>