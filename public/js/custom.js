// 这里编写自定义js脚本；将被静态引入到页面中
// 动态修改 APlayer 的底部位置
function adjustAPlayerPosition() {
  const player = document.querySelector('.aplayer.aplayer-fixed');
  if (player) {
    player.style.bottom = '60px';
    player.style.zIndex = '999'; // 确保播放器在其他元素之上
  }
}

// 在页面加载时执行
window.addEventListener('load', adjustAPlayerPosition);

// 如果你需要在播放器初始化后立即调整（如 APlayer 被加载时），可以使用如下方法：
const interval = setInterval(() => {
  const player = document.querySelector('.aplayer.aplayer-fixed');
  if (player) {
    adjustAPlayerPosition();
    clearInterval(interval); // 找到播放器后停止查找
  }
}, 100); // 每100毫秒检查一次
