//Create map
const map = L.map("mapid").setView([-20.377939, -43.416315], 15);

// Create and add TileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: "/img/map-marker.svg",
  iconSize: [48, 58],
  iconAnchor: [29, 68],
});

let marker;

// Create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  //Remove icon layer
  marker && map.removeLayer(marker);

  //Add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//Add the photo's field
function addPhotoField() {
  //Get the photo's container #images
  const container = document.querySelector("#images");

  //Get the container to duplicate .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");

  //Clone the last add image
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  //Check if input's value is empty
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  //Clear input's text field
  newFieldContainer.children[0].value = "";

  //Add the clone on container of #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  //Clear input value
  if (fieldsContainer.length < 2) {
    span.parentNode.children[0].value = "";
    return;
  }

  //Delete field
  span.parentNode.remove();
}

//Select Yes or No
function toggleSelect(event) {
  //Remove all .active class
  buttons = document.querySelectorAll(".button-select button");
  buttons.forEach((button) => button.classList.remove("active"));

  //Get the clicked button and put the .active class
  const button = event.currentTarget;
  button.classList.add("active");

  //Update the hidden input with selected value
  const input = document.querySelector('[name="open_on_weekends"]');

  //Verify if is yes or no
  input.value = button.dataset.value;
}

// Validate if lat and lng have values
function validate(event) {
  const lat = document.querySelector("#latInput");
  const lng = document.querySelector("#lngInput");

  if(lat.value == '' || lng.value == '') {
      event.preventDefault()
      alert('Selecione um ponto no mapa')
  }
}