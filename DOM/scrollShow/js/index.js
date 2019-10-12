window.onload = function() {
  let doc = document;
  // 获取点击元素
  let btn = doc.querySelector('.arrow')
  // 获取滚轮移动事件的对象
  let scrollItem = doc.querySelector('.back-ground')

  // 监听滚轮事件
  window.addEventListener('scroll',()=>{
    let scrollTop = doc.documentElement.scrollTop || doc.body.scrollTop
    console.log(scrollTop)
    if(scrollTop >= 500) {
      btn.classList.add('show')
    }else {
      btn.classList.remove('show')
    }
  })

  btn.addEventListener('click',()=>{
    let options = {
      top: 0,
      left: 0,
      behavior: 'smooth'// 
    }
    window.scrollTo(options)
  })

}