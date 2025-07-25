// 等待播放器加载并调整样式
function adjustAPlayerPosition() {
  const player = document.querySelector('.aplayer.aplayer-fixed');
  if (player) {
    player.style.bottom = '60px';
    player.style.zIndex = '999'; // 确保播放器不被其他元素遮挡
  } else {
    // 如果找不到播放器，持续检查直到找到
    setTimeout(adjustAPlayerPosition, 100); // 每 100ms 检查一次
  }
}

// 页面加载后执行
window.addEventListener('load', () => {
  adjustAPlayerPosition();
});
