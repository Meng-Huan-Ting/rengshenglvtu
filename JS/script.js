// 配置区 统一管理，不用改逻辑
const CONFIG = {
    maxScaleClick: 3,     // 前3次放大
    jumpClick: 4,         // 第4次跳转
    jumpUrl: "index3.html",
    scaleList: [1, 2, 3, 4],
    textNormal: "点我",
    textTip: "快点我"
};

// 状态
let clickCount = 0;
const btn = document.getElementById('magic-btn');

// 确保按钮存在再执行
if (btn) {
    // 设置缩放
    function setBtnScale(level) {
        btn.style.transform = `scale(${CONFIG.scaleList[level]})`;
    }

    // 设置按钮文字
    function setBtnText(text) {
        btn.innerText = text;
    }

    // 页面跳转
    function goNextPage() {
        location.href = CONFIG.jumpUrl;
    }

    // 点击事件
    btn.addEventListener('click', () => {
        clickCount++;

        if (clickCount <= CONFIG.maxScaleClick) {
            // 每次放大
            setBtnScale(clickCount);
            
            // 第三次改文字
            if (clickCount === 3) {
                setBtnText(CONFIG.textTip);
            }
        }

        // 第四次跳转
        if (clickCount === CONFIG.jumpClick) {
            goNextPage();
        }
    });
} else {
    console.error("错误：找不到按钮元素 #magic-btn");
}