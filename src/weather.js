const weather = document.querySelector (".js-weather");

const API_KEY = "2d66b82c6a59a789528d85ebc336ae5d";
const COORDS = "coords";

function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        )
            .then(function(response) {
            return response.json();
            })
            .then(function(json) {
                
                
            console.log(json);
            const temperature = json.main.temp;
            const place = json.name;
            const id = json.weather[0].id;
            const icon = json.weather[0].icon;

            weather.innerText= 
            `현재 위치 : ${place} \n 현재 기온 : ${temperature} \n id값 : ${id} \n icon값 : ${icon}`;
           
        });
    }

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude)
}

function handleGeoError(){
    console.log('Cant access geo location');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords == null){
        askForCoords();
    } else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}


function init(){
    loadCoords();
}


init();