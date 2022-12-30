const volumeSlider = document.getElementById("volume-slider");

const whiteKeys = document.querySelectorAll(".white-keys");
const blackKeys = document.querySelectorAll(".black-keys");

const whiteKeysArray = Array.from(whiteKeys);
const blackKeysArray = Array.from(blackKeys);

whiteKeysArray.forEach((element) => {
  const audio = new Audio(`tunes/${element.id}.wav`);

  element.addEventListener("click", () => {
    audio.volume = volumeSlider.value / 100;
    audio.play();
  });
});

blackKeysArray.forEach((element) => {
  const audio = new Audio(`tunes/${element.id}.wav`);

  element.addEventListener("click", () => {
    audio.volume = volumeSlider.value / 100;
    audio.play();
  });
});

document.addEventListener("keypress", (e) => {
  whiteKeysArray.forEach((element) => {
    if (element.id == e.key) {
      element.click();
      element.classList.add("active-white");
      setTimeout(() => {
        element.classList.remove("active-white");
      }, 150);
    }
  });
  blackKeysArray.forEach((element) => {
    if (element.id == e.key) {
      element.click();
      element.classList.add("active-black");
      setTimeout(() => {
        element.classList.remove("active-black");
      }, 150);
    }
  });
});
