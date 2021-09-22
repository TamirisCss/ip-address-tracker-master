function mapinha() {

    const myApiKey = "at_T7M6W2MGQt8q5zJu3S8I9UuJaNR6p";
    
    const ipAddress = document.querySelector('.ip-address');
    const location = document.querySelector('.location');
    const timezone = document.querySelector('.timezone');
    const ISP = document.querySelector('.ISP');
    
    const mymap = L.map("mapid").setView([51.505, -0.09], 13);
        let mapToken =
          "pk.eyJ1IjoibW9yc2FrYTkiLCJhIjoiY2trOXZmYjE0MGd0cDJzcGJueHd1MTZidCJ9.UJ5RlDnugIUNkhqsHEf3fw";
        L.tileLayer(
          `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${mapToken}`,
          {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1,
            accessToken: "your.mapbox.access.token",
          }
        ).addTo(mymap);
};
mapinha();



