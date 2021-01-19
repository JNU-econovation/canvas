var bottleNum = 0;
var maxBottleNum = 3;
var waveTimer=5000;

var field;
var fieldWidth;
var fieldHeight;
var wave;

var timeObject=true;

initialize();

setTimeout(cleanField, waveTimer);

function initialize() {

    //var initBottle=document.querySelector('#initializeBottle');
    //initBottle.onclick=function(){cleanField()};

    field = document.querySelector('.bottleField');
    console.log(field);
    fieldWidth = field.offsetWidth;
    fieldHeight = field.offsetHeight;

    wave = document.querySelector('.wave');
    wave.addEventListener('animationend', () => {
        wave.classList.remove('wave');
        void wave.offsetWidth;
        wave.classList.add('wave');
        wave.style.animationPlayState = "paused";
    });

    const animated = document.querySelector('.wave');
    animated.addEventListener('animationend', () => {
        var target = wave;
        target.classList.remove('wave');
        void target.offsetWidth;
        target.classList.add('wave');
        target.style.animationPlayState = "paused";
    });
    spawnBottles();
}

function cleanField() {

    if(timeObject==true){
    var style = wave.style;
    style.animationPlayState = "running";
    setTimeout(cleanField, waveTimer);
    setTimeout(cleanBottle, 500);
    setTimeout(spawnBottles, 500);
    }

}

function sometimesCleanField(){
    if(timeObject==true){
        var style = wave.style;
        style.animationPlayState = "running";
        setTimeout(cleanBottle, 500);
        setTimeout(spawnBottles, 500);
        }
}

function spawnBottle() {


    if (bottleNum >= maxBottleNum)
        return;

    var bottle = document.createElement('button')
    
    bottle.className = "bottleLetter";
    bottle.style.position = 'absolute';
    bottle.style.left = String((Math.random()*100)%100) + '%';
    bottle.style.top = String((Math.random()*60)%100+40) + '%';
    bottle.style.height='100px';
    bottle.style.width='233px';
    bottle.style.zIndex = '0';
    bottle.style.backgroundColor='transparent';
    bottle.style.borderColor= 'transparent';
    bottle.style.border= 'none';
    bottle.style.outline= 'none';
    bottle.style.backgroundImage='url("../src/Assets/Images/bottle_lie_small.png")';
    

    var image = document.createElement('img');
    image.className = "bottleImage";
    //image.src = url("./Assets/Images/bottle_lie.png");
    bottle.appendChild(image);
    field.appendChild(bottle);

    bottle.onclick=function(){letterPopup(bottle)};

    bottleNum += 1;
}

function spawnBottles() {
    for (var i = bottleNum; i < maxBottleNum; i++) {
        spawnBottle();
        console.log("현석 선생님?");
    }
}

function deleteBottle(bottle) {
    bottle.parentNode.removeChild(bottle);
    bottleNum-=1;
}

function cleanBottle() {
    var child = field.lastElementChild;  
        while (child) { 
            deleteBottle(child);
            // beach.removeChild(child); 
            child = field.lastElementChild; 
        } 
}
