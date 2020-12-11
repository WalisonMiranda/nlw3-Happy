const map = L.map("mapid").setView([-20.377939, -43.416315], 15);

// Create and add TileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: "/img/map-marker.svg",
  iconSize: [48, 58],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function addMarker({ id, name, lat, lng}) {

  // Create popup overlay
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="orphanage?id=${id}"><img src="/img/arrow-white.svg"></a>`
  );


  // Create and add marker
  L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup);
};

const orphanagesSpan = document.querySelectorAll('.orphanages span');

orphanagesSpan.forEach(span => {
  const orphanage = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng,
  };

  addMarker(orphanage);
})