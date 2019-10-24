function init () {

    // 获取屏幕宽度

    var width = document.documentElement.clientWidth


    width = width>1024?1024:width
    let init_size = 1024/12; 
    // document.documentElement.style.fontSize = width / 3.75 + 'px'
    document.documentElement.style.fontSize = width / init_size + 'px'

}

// 首次加载应用，设置一次

init();

// 监听手机窗口变化，重新设置

window.addEventListener('resize', init)