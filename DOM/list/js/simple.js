window.onload = function() {
  let doc = document;
  // 获取切换标签的父元素
  let tabArea = doc.querySelector('.list-tab')
  // 获取内容区的父元素
  let contentArea = doc.querySelector('.list-content')
  tabArea.addEventListener('click', function(){
    let e = event || window.event
    // console.log(e.target)
    tar = e.target
    if(tar.nodeName !== "LI") return;
    else {
      let tabs = Array.prototype.slice.call(tabArea.children);
      let conts = Array.prototype.slice.call(contentArea.children)
      let index = tabs.indexOf(tar) || 0
      console.log(index);
      

      // 初始化所有标签的样式
      tabs.forEach(item=>{
        item.classList.remove('active')
      })
      conts.forEach(item=>{
        item.classList.remove('show')
      })
      // 给当前标签加类名
      tar.classList.add('active')
      conts[index].classList.add('show')
    }
  })
}