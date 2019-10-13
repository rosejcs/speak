(function() {
  console.log(1);
  let doc = document;

  // 获取元素
  let pages = doc.querySelector(".pages");

  let btns = doc.querySelector(".btns");
  let colorArr = [];
  for (let i = 0; i < 4; i++) {
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let black = Math.round(Math.random() * 255);
    let bg = `rgb(${red},${green},${black})`;
    colorArr.push(bg);
  }
  let pageItems = Array.prototype.slice.call(pages.children);
  let btnItems = Array.prototype.slice.call(btns.children);

  // 获取每个的高度
  let perHeight = pageItems[0].offsetHeight;

  // 修改颜色,添加事件监听
  pageItems.forEach((item, index) => {
    item.style.background = colorArr[index];
    
  });
  btnItems.forEach((item, index) => {
    item.style.background = colorArr[index];
    // 监听点击事件
    item.addEventListener("click", () => {
      window.scrollTo({
        top: perHeight * index,
        behavior: "smooth"
      });
    });
  });

  // 滚轮事件触发, 修改右侧电梯按钮位置和响应样式
  window.onscroll = function() {
    let scrollTop = doc.documentElement.scrollTop || doc.body.scrollTop;
    let index = Math.floor(scrollTop / perHeight);
    btnItems.forEach(item => {
      item.classList.remove("btnActive");
    });
    pageItems.forEach(item=>{
      item.classList.remove("pageActive");
    })
    btnItems[index].classList.add("btnActive");
    pageItems[index].classList.add('pageActive')
  };
})();
