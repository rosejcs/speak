function init () {

    // 获取屏幕宽度

    var width = document.documentElement.clientWidth


    width = width>640?640:width

    document.documentElement.style.fontSize = width / 3.75 + 'px'

}

// 首次加载应用，设置一次

init();

// 监听手机窗口变化，重新设置

window.addEventListener('resize', init)