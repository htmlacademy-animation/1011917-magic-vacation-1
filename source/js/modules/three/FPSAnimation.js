import {activeScene} from './story.js';

export const animationFPS = (render, duration, fps, endCB = () => { }) => {
  let start = 0;
  let lastFrameUpdateTime = 0;
  let timeAgoLastUpdate = 0;

  function frame(currentTime) {
    if (!start) {
      start = currentTime;
    }

    if (!lastFrameUpdateTime) {
      lastFrameUpdateTime = currentTime;
    }

    let progress = (currentTime - start) / duration;
    if (progress > 1) {
      render(1);
      endCB();
      return;
    }

    timeAgoLastUpdate = currentTime - lastFrameUpdateTime;
    if (timeAgoLastUpdate > fps) {
      lastFrameUpdateTime = currentTime;
      render(progress);
    }
    if (activeScene === 1) {
      requestAnimationFrame(frame);
    }
  }

  frame();
};
