// Configs for static map
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
};

//Get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;

// Set start location
const map = L.map("mapid", options).setView([lat, lng], 15);

// Create and add TileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: "/img/map-marker.svg",
  iconSize: [48, 58],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// Create and add marker

L.marker([lat, lng], { icon })
  .addTo(map);

// Image gallery
function selectImage(event) {
  const button = event.currentTarget;

  //Remove all .active class
  const buttons = document.querySelectorAll('.images button');
  buttons.forEach((button) => {
    button.classList.remove('active');
  });

  //Select the clicked image
  // const showImage = event.target.src;
  // console.log(showImage);
  // document.querySelector('#imageContainer').src = showImage;
  const image = button.children[0];
  const imageContainer = document.querySelector('.orphanage-details > img');

  //Update the main image container
  imageContainer.src = image.src;

  //Add the .active class to clicked button
  button.classList.add('active');
};