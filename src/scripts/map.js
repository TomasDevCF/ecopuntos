const places = [
  {
    name: "CV Sur",
    accept: ["Residuos Húmedos", "Residuos Secos"],
    latitude: -31.4682616,
    longitude: -64.204432,
    type: "cv",
    open: "Lun a Vie 8:00-20:00, Sáb 8:00-12:00",
  },
  {
    name: "CV Norte",
    accept: ["Residuos Húmedos", "Residuos Secos"],
    latitude: -31.3433159,
    longitude: -64.2147425,
    type: "cv",
    open: "Lun a Vie 8:00-20:00, Sáb 8:00-12:00",
  },
  {
    name: "CV ECOFEM",
    accept: ["Residuos Húmedos", "Residuos Secos"],
    latitude: -31.3875422,
    longitude: -64.163699,
    type: "cv",
    open: "Lun a Vie 8:00-20:00, Sáb 8:00-12:00",
  },
  {
    name: "CV Este",
    accept: ["Residuos Húmedos", "Residuos Secos"],
    latitude: -31.346159,
    longitude: -64.140349,
    type: "cv",
    open: "Lun a Vie, 9:00-19:00",
  },
  {
    name: "Coca Cola Plaza de la Intendencia",
    accept: ["Residuos Húmedos"],
    latitude: -31.4179653,
    longitude: -64.2009887,
    type: "ecopunto",
    open: null,
  },
  {
    name: "Coca Cola La Kermes de Güemes",
    accept: ["Residuos Húmedos"],
    latitude: -31.423924,
    longitude: -64.193233,
    type: "ecopunto",
    open: null,
  },
  {
    name: "Coca Cola Facultad de Odontología",
    accept: null,
    latitude: -31.4397197,
    longitude: -64.1892666,
    type: "ecopunto",
    open: null,
  },
  {
    name: "Coca Cola Comedor Universitaria",
    accept: null,
    latitude: -31.4397197,
    longitude: -64.1892666,
    type: "ecopunto",
    open: null,
  },
  {
    name: "Plaza Alta Córdoba",
    accept: ["Residuos Secos"],
    latitude: -31.391014465813754,
    longitude: -64.18522409041685,
    type: "ecopunto",
    open: null,
  },
  {
    name: "Elías Yofre",
    accept: ["Residuos Secos"],
    latitude: -31.451256070670027,
    longitude: -64.17972675634924,
    type: "ecopunto",
    open: null,
  },
  {
    name: "Plaza Lisandro Novillo Saravia",
    accept: null,
    latitude: -31.340493395737617,
    longitude: -64.25747246296376,
    type: "ecopunto",
    open: null,
  },
  {
    name: "Plaza José María Paz",
    accept: ["Residuos Secos"],
    latitude: -31.410448717649466,
    longitude: -64.17071361311494,
    type: "ecopunto",
    open: null,
  },
  {
    name: "Parque de las Tejas",
    accept: ["Residuos Secos"],
    latitude: -31.432221259765132,
    longitude: -64.18656196446524,
    type: "ecopunto",
    open: null,
  },
  {
    name: "Parque del Chateau",
    accept: null,
    latitude: -31.373338061850045,
    longitude: -64.25590508958751,
    type: "ecopunto",
    open: null,
  },
  {
    name: "Plaza Alberdi",
    accept: ["Residuos Secos"],
    latitude: -31.413837276576277,
    longitude: -64.17005031150521,
    type: "ecopunto",
    open: null,
  },
  {
    name: "Plaza Gendarmería Nacional",
    accept: ["Residuos Secos"],
    latitude: -31.37759104435136,
    longitude: -64.21464118291766,
    type: "ecopunto",
    open: null,
  },
  {
    name: "Plaza Jerónimo del Barco",
    accept: ["Residuos Secos"],
    latitude: -31.404327717302014,
    longitude: -64.21766143927829,
    type: "ecopunto",
    open: null,
  },
  {
    name: "Buen Pastor - San Lorenzo y Buenos Aires",
    accept: ["Residuos Húmedos", "Residuos Secos"],
    latitude: -31.423298910853287,
    longitude: -64.1871605793399,
    type: "ecopunto",
    open: null,
  },
  {
    name: "Teatro Griego",
    accept: ["Residuos Secos"],
    latitude: -31.43128575072363,
    longitude: -64.17340899664896,
    type: "ecopunto",
    open: null,
  },
  {
    name: "Parque de las Naciones",
    accept: ["Residuos Secos"],
    latitude: -31.38464176486147,
    longitude: -64.2276392692529,
    type: "ecopunto",
    open: null,
  },
  {
    name: "Plaza Mariano Moreno",
    accept: ["Residuos Secos"],
    latitude: -31.423370817896604,
    longitude: -64.14853207419505,
    type: "ecopunto",
    open: null,
  },
  {
    name: "Recta Martinolli",
    accept: ["Residuos Secos"],
    latitude: -31.343602577991277,
    longitude: -64.28848390300416,
    type: "ecopunto",
    open: null,
  },
  {
    name: "Playón Deportivo Granadero Pringles",
    accept: ["Residuos Húmedos"],
    latitude: -31.375078494330396,
    longitude: -64.1982376538159,
    type: "ecopunto",
    open: null,
  },
  {
    name: "Playón Deportivo Social Marcos Sastre",
    accept: ["Residuos Secos"],
    latitude: -31.44742559275663,
    longitude: -64.15120576911809,
    type: "ecopunto",
    open: null,
  },
  {
    name: "Plaza Colón",
    accept: ["Residuos Secos"],
    latitude: -31.4087646873001,
    longitude: -64.19618816648938,
    type: "ecopunto",
    open: null,
  },
  {
    name: "Club Córdoba Athletic",
    accept: ["Residuos Secos"],
    latitude: -31.45058832411145,
    longitude: -64.17527248036676,
    type: "ecopunto",
    open: null,
  },
  {
    name: "Club Córdoba Rugby",
    accept: null,
    latitude: -31.344915158849325,
    longitude: -64.1759558393709,
    type: "ecopunto",
    open: null,
  },
  {
    name: "Jockey Club Córdoba",
    accept: ["Residuos Secos"],
    latitude: -31.45780908637373,
    longitude: -64.18006644293463,
    type: "ecopunto",
    open: null,
  },
  {
    name: "Club La Tablada",
    accept: ["Residuos Secos"],
    latitude: -31.34595873039588,
    longitude: -64.29832756897082,
    type: "ecopunto",
    open: null,
  },
  {
    name: "Club Palermo Bajo",
    accept: ["Residuos Secos"],
    latitude: -31.337437885650836,
    longitude: -64.23534780061368,
    type: "ecopunto",
    open: null,
  },
  {
    name: "Club Tala Rugby",
    accept: ["Residuos Secos"],
    latitude: -31.339633947310855,
    longitude: -64.2958676631533,
    type: "ecopunto",
    open: null,
  },
  {
    name: "Club Universitario – Sede 7 Soles",
    accept: ["Residuos Secos"],
    latitude: -31.413255359777743,
    longitude: -64.21527577504425,
    type: "ecopunto",
    open: null,
  },
];

function createMarker(place) {
  var marker = L.marker([place.latitude, place.longitude]).addTo(markerGroup);

  marker.bindPopup(
    `
  <div class="w-full h-full flex flex-col gap-y-2">
    <b class="text-center">${place.name}</b>
    <span class="w-full bg-black h-[2px]"></span>
    <div class="flex flex-wrap w-full gap-y-1">
      ${
        place.accept
          ? `
      <div class="flex gap-x-1 w-full">
        <div class="${place.accept.includes("Residuos Secos") ? "bg-primary" : "bg-red-600"} size-3 rounded-full"></div>
        <b>Residuos Secos</b>
      </div>
      <div class="flex gap-x-1 w-full">
        <div class="${place.accept.includes("Residuos Húmedos") ? "bg-primary" : "bg-red-600"} size-3 rounded-full"></div>
        <b>Residuos Húmedos</b>
      </div>
      `
          : `
        <div class="w-full">
          <b class="text-center">Desconocido</b>
        </div>
      `
      }
    </div>
    <span class="w-full bg-black h-[2px]"></span>
    <b class="text-center text-primary">${place.open ? place.open : "Siempre abierto"}</b>
  </div>
`,
    { maxWidth: 140, minWidth: 140 }
  );
}

const radios = document.querySelectorAll('input[name="trash-type"]');

var map = L.map("map").setView([-31.40889, -64.189], 14);
var markerGroup = L.layerGroup().addTo(map);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

for (let i = 0; i < places.length; i++) {
  createMarker(places[i]);
}

radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    const trashType = radio.value;
    map.removeLayer(markerGroup);
    markerGroup = L.layerGroup().addTo(map);
    if (trashType != "Todos") {
      const filterPlaces = places.filter((place) => {
        if (place.accept) {
          return place.accept.includes(trashType);
        } else {
          return false;
        }
      });

      console.log(filterPlaces);

      for (let i = 0; i < filterPlaces.length; i++) {
        createMarker(filterPlaces[i]);
      }
    } else {
      for (let i = 0; i < places.length; i++) {
        createMarker(places[i]);
      }
    }
  });
});
