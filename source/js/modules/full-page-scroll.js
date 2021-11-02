import throttle from 'lodash/throttle';
import {GameTitleAccentTypography, TitleAccentTypography, DateAccentTypography, PrizesTitleAccentTypography, StoryTitleAccentTypography, RulesTitleAccentTypography} from './intro';
import controlSmil from './smil';
import {runTimer, resetTimer} from './timer.js';
import {runCounters, resetCounters} from './prizes-counter.js';

export default class FullPageScroll {
  constructor() {
    this.THROTTLE_TIMEOUT = 2000;

    this.screenElements = document.querySelectorAll(`.screen:not(.screen--result)`);
    this.menuElements = document.querySelectorAll(`.page-header__menu .js-menu-link`);
    this.fillScreen = document.querySelector(`.overlay-animation-screen`);

    this.prizesScreen = document.getElementsByClassName(`screen--prizes`)[0];

    this.activeScreen = 0;
    this.onScrollHandler = this.onScroll.bind(this);
    this.onUrlHashChengedHandler = this.onUrlHashChanged.bind(this);
  }

  init() {
    document.addEventListener(
        `wheel`,
        throttle(this.onScrollHandler, this.THROTTLE_TIMEOUT, {trailing: true})
    );
    window.addEventListener(`popstate`, this.onUrlHashChengedHandler);

    this.onUrlHashChanged();
  }

  onScroll(evt) {
    const currentPosition = this.activeScreen;
    this.reCalculateActiveScreenPosition(evt.deltaY);
    if (currentPosition !== this.activeScreen) {
      this.changePageDisplay();
    }
  }

  onUrlHashChanged() {
    const newIndex = Array.from(this.screenElements).findIndex((screen) => location.hash.slice(1) === screen.id);
    this.activeScreen = (newIndex < 0) ? 0 : newIndex;
    this.handleAnimations();
    this.changePageDisplay();
  }

  changePageDisplay() {
    this.changeVisibilityDisplay();
    this.changeActiveMenuItem();
    this.emitChangeDisplayEvent();
  }

  changeVisibilityDisplay() {
    const isPrizesScreenActive = this.activeScreen === 2;
    const isRulesScreenActive = this.activeScreen === 3;
    const isGameScreenActive = this.activeScreen === 4;


    if (isPrizesScreenActive) {
      this.screenElements.forEach((screen) => {
        this.fillScreen.classList.add(`active`);
        setTimeout(() => this.hideScreen(screen), 650);
      });

      this.fillScreen.classList.add(`active`);

      // game counter starter
      resetTimer();

      setTimeout(() => {
        this.showScreen(this.screenElements[this.activeScreen]);
      }, 650);
      setTimeout(() => {
        controlSmil(this.screenElements[this.activeScreen].id);
      }, 1200);

      setTimeout(() => {
        // prizes counter starter
        runCounters();
      }, 1600);
    } else if (isRulesScreenActive) {
      this.prizesScreen.classList.add(`will-destroy`);

      this.screenElements.forEach((screen) => {
        this.fillScreen.classList.remove(`active`);
        setTimeout(() => this.hideScreen(screen), 300);
      });

      this.fillScreen.classList.remove(`active`);

      resetTimer();
      resetCounters();

      setTimeout(() => {
        this.showScreen(this.screenElements[this.activeScreen]);
        this.prizesScreen.classList.remove(`will-destroy`);
      }, 300);
    } else if (isGameScreenActive) {
      this.screenElements.forEach((screen) => {
        this.fillScreen.classList.remove(`active`);
        this.hideScreen(screen);
      });

      runTimer();
      resetCounters();

      this.fillScreen.classList.remove(`active`);
      this.showScreen(this.screenElements[this.activeScreen]);
    } else {
      this.screenElements.forEach((screen) => {
        this.fillScreen.classList.remove(`active`);
        this.hideScreen(screen);
      });

      resetTimer();
      resetCounters();

      this.fillScreen.classList.remove(`active`);
      this.showScreen(this.screenElements[this.activeScreen]);
    }
  }

  changeActiveMenuItem() {
    const activeItem = Array.from(this.menuElements).find(
        (item) => item.dataset.href === this.screenElements[this.activeScreen].id
    );
    if (activeItem) {
      this.menuElements.forEach((item) => item.classList.remove(`active`));
      setTimeout(() => {
        activeItem.classList.add(`active`);
      }, 100);
    }
  }

  emitChangeDisplayEvent() {
    const event = new CustomEvent(`screenChanged`, {
      detail: {
        screenId: this.activeScreen,
        screenName: this.screenElements[this.activeScreen].id,
        screenElement: this.screenElements[this.activeScreen],
      },
    });

    document.body.dispatchEvent(event);
  }

  reCalculateActiveScreenPosition(delta) {
    if (delta > 0) {
      this.activeScreen = Math.min(
          this.screenElements.length - 1,
          ++this.activeScreen
      );
    } else {
      this.activeScreen = Math.max(0, --this.activeScreen);
    }
  }

  hideScreen(screen) {
    screen.classList.add(`screen--hidden`);
    screen.classList.remove(`active`);
  }

  showScreen(screen) {
    screen.classList.remove(`screen--hidden`);
    screen.classList.add(`active`);
  }

  handleAnimations() {
    if (this.activeScreen === 0) {
      setTimeout(() => TitleAccentTypography.runAnimation(), 500);
      setTimeout(() => DateAccentTypography.runAnimation(), 1300);
    } else {
      TitleAccentTypography.destroyAnimation();
      DateAccentTypography.destroyAnimation();
    }

    if (this.activeScreen === 1) {
      setTimeout(() => StoryTitleAccentTypography.runAnimation(), 300);
    } else {
      StoryTitleAccentTypography.destroyAnimation();
    }

    if (this.activeScreen === 2) {
      setTimeout(() => PrizesTitleAccentTypography.runAnimation(), 700);
    } else {
      PrizesTitleAccentTypography.destroyAnimation();
    }

    if (this.activeScreen === 3) {
      setTimeout(() => RulesTitleAccentTypography.runAnimation(), 300);
    } else {
      RulesTitleAccentTypography.destroyAnimation();
    }

    if (this.activeScreen === 4) {
      setTimeout(() => GameTitleAccentTypography.runAnimation(), 500);
    } else {
      GameTitleAccentTypography.destroyAnimation();
    }
  }
}
