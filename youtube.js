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
    let speed23 = document.getElementById("speed_2-3");
    if (!speed23) {
        // 速度级别
        var speeds = [2.25,2.5,2.75,3];

        // 创建速度按钮
        var container = document.createElement("div");
        container.setAttribute("id", "speed_2-3");
        container.style.cssText = "display: flex;align-items: center;";
        speeds.forEach(function(x) {
            var btn = document.createElement("button");
            btn.textContent = x + "x";
            btn.onclick = function() {
                const videoPlayer = document.querySelector('.video-stream');
                videoPlayer.playbackRate = x;
                console.log('Playback speed increased to 5x');

            }
            container.appendChild(btn);
        });

        // 插入页面
        var subscribeButton = document.getElementById("owner");
        subscribeButton.insertAdjacentElement('afterend', container);

    }
}

(function() {
    'use strict';


    // 定时刷新间隔(单位:毫秒)
    const refreshInterval = 10000;

    setInterval(speedcontrol, refreshInterval);

    // Your code here...
})();




