/* --- 返回顶部按钮逻辑 --- */

// 等待 HTML 加载完成后再执行，防止找不到元素
document.addEventListener('DOMContentLoaded', function () {

    // 1. 获取按钮元素
    const mybutton = document.getElementById("backToTop");

    // 如果当前页面没有这个按钮，就直接退出，防止报错
    if (!mybutton) return;

    // 2. 监听滚动事件
    window.onscroll = function () {
        // 当页面向下滚动超过 300px 时显示按钮
        // 兼容不同浏览器的 scrollTop 写法
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            mybutton.style.display = "flex"; // 使用 flex 保持居中
        } else {
            mybutton.style.display = "none";
        }
    };

    // 3. 点击事件：点击按钮平滑滚动回顶部
    mybutton.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // 平滑滚动效果
        });
    };
});
/* --- 滚动渐显动画逻辑 (Scroll Reveal) --- */
document.addEventListener('DOMContentLoaded', function () {

    // 1. 自动给页面上的主要卡片添加 'reveal-item' 类
    const targetElements = document.querySelectorAll('.card, .driver-card, .standing-card, .list-row');

    targetElements.forEach(function (el) {
        el.classList.add('reveal-item');
    });

    // 2. 定义检测函数：检查元素是否进入视口
    function checkReveal() {
        // 设定触发线：屏幕底部向上 150px 的位置
        const triggerBottom = window.innerHeight - 150;

        targetElements.forEach(function (el) {
            // 获取元素顶部距离屏幕顶部的距离
            const boxTop = el.getBoundingClientRect().top;

            // 如果元素顶部 此时小于 触发线，说明已经露出来了
            if (boxTop < triggerBottom) {
                el.classList.add('active');
            }
            // 如果想让它滚回去时消失，可以把下面这行注释取消
            // else { el.classList.remove('active'); }
        });
    }

    // 3. 监听滚动事件
    window.addEventListener('scroll', checkReveal);

    // 4. 页面加载时先执行一次，保证首屏内容能显示
    checkReveal();
});