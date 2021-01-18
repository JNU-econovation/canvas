//openweathermap API

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
            `현재 위치 : ${place} \n 현재 기온 : ${temperature} \n 날씨id : ${id}`;
           
            //날씨 id값 별 배경 애니메이션 조절
            if( id < 200) {  // 애니메이션 X
                document.querySelector(".thunder").style.display="block";
                document.querySelector(".snowflakes").style.display="none";
                document.querySelector(".clouds").style.display="none";
                document.querySelector(".rain").style.display="block";
            }
            else if( id < 300) {  // 200~300 뇌우
                document.querySelector(".thunder").style.display="block";
                document.querySelector(".snowflakes").style.display="none";
                document.querySelector(".clouds").style.display="block";
                document.querySelector(".rain").style.display="block";
            }
            else if( id < 600) {  // 300~600 비
                document.querySelector(".thunder").style.display="none";
                document.querySelector(".snowflakes").style.display="none";
                document.querySelector(".clouds").style.display="block";
                document.querySelector(".rain").style.display="block";
                document.body.style.backgroundColor = "#CFCFCF"; //배경색 회색
            }
            else if( id < 700) {   // 600~700 눈
                document.querySelector(".thunder").style.display="none";
                document.querySelector(".snowflakes").style.display="blcok";
                document.querySelector(".clouds").style.display="none";
                document.querySelector(".rain").style.display="none";

            }
            else if( id == 800) {  // 800 : 맑음
                document.querySelector(".thunder").style.display="none";
                document.querySelector(".snowflakes").style.display="none";
                document.querySelector(".clouds").style.display="none";
                document.querySelector(".rain").style.display="none";
            }
            else if( id < 900) {   // 700~900 : 흐림
                document.querySelector(".thunder").style.display="none";
                document.querySelector(".snowflakes").style.display="none";
                document.querySelector(".clouds").style.display="blcok";
                document.querySelector(".rain").style.display="none";
            }
            else { // 애니메이션 X
                document.querySelector(".thunder").style.display="none";
                document.querySelector(".snowflakes").style.display="none";
                document.querySelector(".clouds").style.display="none";
                document.querySelector(".rain").style.display="none";
            }

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