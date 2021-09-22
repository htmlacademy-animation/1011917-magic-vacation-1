export default class AccentTypography {
  constructor(element, timer, delay, classForActivate, property) {
    this._element = element;
    this._property = property;
    this._timer = timer;
    this._delay = delay;
    this._classForActivate = classForActivate;

    this.prepareText();
  }

  createElement(letter) {
    const span = this.createSpanElement();

    span.className = `letter`;
    span.textContent = letter;
    span.style.transition = `${this._property} ${this._timer}ms ease ${this.getTimeOffset()}ms`;

    return span;
  }

  createSpanElement() {
    return document.createElement(`span`);
  }

  prepareText() {
    if (!this._element) {
      return;
    }

    const text = this._element.textContent.trim().split(` `).filter((letter) => letter !== ``);

    const content = text.reduce((fragmentParent, word) => {
      const wordElement = Array.from(word).reduce((fragment, letter) => {
        fragment.appendChild(this.createElement(letter));
        return fragment;
      }, document.createDocumentFragment());
      const wordContainer = this.createSpanElement();

      wordContainer.classList.add(`space`);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);

      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(content);
  }

  getTimeOffset() {
    return Math.floor(Math.random() * (this._delay.max - this._delay.min + 1)) + this._delay.min;
  }

  runAnimation() {
    if (!this._element) {
      return;
    }
    this._element.classList.add(this._classForActivate);
  }

  destroyAnimation() {
    this._element.classList.remove(this._classForActivate);
  }
}
