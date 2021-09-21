export default function () {
  const onLoad = () => {
    document.body.classList.add(`load`);
    window.removeEventListener(`load`, onLoad);
  };

  window.addEventListener(`load`, onLoad);
}
