// fancy-bg
const desktopBackgrounds = [
  '/b/fancy-bg/dp-1.png',
  '/b/fancy-bg/dp-2.png',
  '/b/fancy-bg/dp-3.png',
  '/b/fancy-bg/dp-4.png',
  '/b/fancy-bg/dp-5.png',
];

const mobileBackgrounds = [ 
  '/b/fancy-bg/m-1.png', 
  '/b/fancy-bg/m-2.png', 
  '/b/fancy-bg/m-3.png', 
  '/b/fancy-bg/m-4.png',
  '/b/fancy-bg/m-5.png'
];

function getRandomImage(images) {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

function setRandomBackground() {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const images = isMobile ? mobileBackgrounds : desktopBackgrounds;
  const chosenImage = getRandomImage(images);

  document.body.style.setProperty('--bg-image', `url(${chosenImage})`);

  console.log('isMobile:', isMobile);
  console.log('chosenImage:', chosenImage);
}

window.addEventListener('load', setRandomBackground);
