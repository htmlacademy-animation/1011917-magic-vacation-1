import seacalfScene from "./seacalfCanvas.js";
import ResultFail from "./crocodile-animation.js";

export default () => {
  let showResultEls = document.querySelectorAll(`.js-show-result`);
  let results = document.querySelectorAll(`.screen--result`);
  if (results.length) {
    for (let i = 0; i < showResultEls.length; i++) {
      showResultEls[i].addEventListener(`click`, function () {
        let target = showResultEls[i].getAttribute(`data-target`);
        [].slice.call(results).forEach(function (el) {
          el.classList.remove(`screen--show`);
          el.classList.add(`screen--hidden`);
        });
        let targetEl = [].slice.call(results).filter(function (el) {
          return el.getAttribute(`id`) === target;
        });
        targetEl[0].classList.add(`screen--show`);
        targetEl[0].classList.remove(`screen--hidden`);

        switch (target) {
          case `result`:
            // eslint-disable-next-line new-cap
            let seacalfCanvasAnimate = new seacalfScene({
              canvas: document.querySelector(`#seacalf-canvas`),
            });

            seacalfCanvasAnimate.startAnimation();

            break;
          case `result3`:
            const animationResult3 = new ResultFail({
              canvas: `#result3_canvas`,
            });
            animationResult3.startAnimation();

            break;
        }
      });
    }

    let playBtn = document.querySelector(`.js-play`);
    if (playBtn) {
      playBtn.addEventListener(`click`, function () {
        [].slice.call(results).forEach(function (el) {
          el.classList.remove(`screen--show`);
          el.classList.add(`screen--hidden`);
        });
        document.getElementById(`messages`).innerHTML = ``;
        document.getElementById(`message-field`).focus();
      });
    }
  }
};
