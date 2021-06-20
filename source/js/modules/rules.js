export default () => {
  const rulesListItems = Array.from(document.querySelectorAll(`.rules__item`));
  const lastItem = rulesListItems[rulesListItems.length - 1];
  const lastItemText = lastItem.querySelector(`p`);
  const rulesLink = document.querySelector(`.rules__link`);

  rulesListItems.forEach((item, index) => {
    item.style.setProperty(`--index`, String(index + 1));
  });

  lastItemText.addEventListener(`animationend`, () => {
    rulesLink.classList.add(`animated`);
  });
};
