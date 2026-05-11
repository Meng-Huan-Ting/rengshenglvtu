// 配置区，统一管理延迟时间，后期改这里就行
const CONFIG = {
    baseDelay: 300,  // 每一行之间的间隔（毫秒）
    startDelay: 300  // 第一行的延迟
};

// 获取所有p标签
const paragraphs = document.querySelectorAll('.content-wrapper p');

// 给每个p标签依次加上淡入动画
paragraphs.forEach((p, index) => {
    const delay = CONFIG.startDelay + index * CONFIG.baseDelay;
    setTimeout(() => {
        p.classList.add('fade-in');
    }, delay);
});
