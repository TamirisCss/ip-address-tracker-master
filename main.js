

const myApiKey = "at_T7M6W2MGQt8q5zJu3S8I9UuJaNR6p";

const form = document.querySelector('.input-box');
const input = document.querySelector('.src-input');
const inputBtn = document.querySelector('.arrow-bg');
const ipAddress = document.querySelector('.ip-address');
const ipLocation = document.querySelector('.local');
const timezone = document.querySelector('.timezone');
const isp = document.querySelector('.ISP');

const myMap = L.map('mapid')
let lat;
let lng;

const displayMap = () => {
    let markerIcon = L.icon( {
        iconUrl: 'images/icon-location.svg',
        iconSize:     [46, 56], 
        iconAnchor:   [23, 55], 
    });
    myMap.setView([lat, lng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(myMap);

    L.marker([lat, lng], {icon: markerIcon}).addTo(myMap);
};

const displayIpInfos = (data) => {
    ipAddress.innerText = data.ip;
    ipLocation.innerText = `${data.location.city}, ${data.location.country} ${data.location.postalCode}`;
    timezone.innerText = `UTC ${data.location.timezone}`;
    isp.innerText = data.isp;
};
    

const getIpInfos = (ipAddress = "") => {
    fetch(`https://geo.ipify.org/api/v1?apiKey=${myApiKey}&ipAddress=${ipAddress}`)
    .then(res => res.json())
    .then(data => {
        lat = data.location.lat;
        lng = data.location.lng;
        displayIpInfos(data);
        displayMap();
    })
    .catch(error => {
        alert("invalid IP address.");
    })
}
getIpInfos();

form.addEventListener("submit", event => {
    event.preventDefault();
    getIpInfos(input.value);
});








