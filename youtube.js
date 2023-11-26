// ==UserScript==
// @name         speed2-3x
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.anthropic.com/index/claude-2
// @match        *://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=anthropic.com
// @grant        none
// ==/UserScript==

function speedcontrol() {
  let cur_url = document.URL;
  let speed23 = document.getElementById("speed_2-3");

  if (!speed23 && cur_url.includes("watch")) {
    // 创建速度按钮
    var container = document.createElement("div");
    container.setAttribute("id", "speed_2-3");
    container.style.cssText =
      "display: flex;justify-content: center;align-items: center;";

    // 创建按钮
    var btn = document.createElement("button");
    btn.style.cssText =
      "display: flex;border: none;border-radius: 20px;align-items: center;";

    // 左侧减号
    var minusBtn = document.createElement("span");
    minusBtn.style.cssText = "flex: 1;margin: 10px;";
    minusBtn.textContent = "-";
    minusBtn.onclick = function () {
      updatePlaybackRate(-0.4);
    };

    // 中间显示当前速度
    var currentSpeedDisplay = document.createElement("span");
    currentSpeedDisplay.setAttribute("id", "current-speed-display");
    currentSpeedDisplay.style.cssText = "flex: 1;margin: 10px;";
    currentSpeedDisplay.textContent = "1.0x";

    // 右侧加号
    var plusBtn = document.createElement("span");
    plusBtn.style.cssText = "flex: 1;margin: 10px;";
    plusBtn.textContent = "+";
    plusBtn.onclick = function () {
      updatePlaybackRate(0.4);
    };

    // 将所有元素添加到按钮中
    btn.appendChild(minusBtn);
    btn.appendChild(currentSpeedDisplay);
    btn.appendChild(plusBtn);

    container.appendChild(btn);

    // 插入页面
    var subscribeButton = document.getElementById("owner");
    subscribeButton.insertAdjacentElement("afterend", container);

    // 更新播放速度函数
    function updatePlaybackRate(increment) {
      const videoPlayer = document.querySelector(".video-stream");
      videoPlayer.playbackRate =
        parseFloat(videoPlayer.playbackRate) + increment;
      currentSpeedDisplay.textContent =
        videoPlayer.playbackRate.toFixed(1) + "x";
      console.log("player speed  " + videoPlayer.playbackRate.toFixed(1) + "x");
    }
  } else if (speed23 && cur_url.includes("watch")) {
    const videoPlayer = document.querySelector(".video-stream");
    let currentSpeedDisplay = document.getElementById("current-speed-display");
    currentSpeedDisplay.textContent = videoPlayer.playbackRate.toFixed(1);
  }
}

(function () {
  "use strict";

  // 定时刷新间隔(单位:毫秒)
  const refreshInterval = 10000;

  setInterval(speedcontrol, refreshInterval);

  // Your code here...
})();
