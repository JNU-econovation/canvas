var bottleNum = 0;
var maxBottleNum = 3;
var waveTimer=25000;

var field;
var fieldWidth;
var fieldHeight;
var wave;
var waveDecorate;

var timeObject=true;

initialize();

setTimeout(cleanField, waveTimer);
console.time();

function initialize() {

    //var initBottle=document.querySelector('#initializeBottle');
    //initBottle.onclick=function(){cleanField()};

    field = document.querySelector('.bottleField');
    console.log(field);
    fieldWidth = field.offsetWidth;
    fieldHeight = field.offsetHeight;

    wave = document.querySelector('.wave');
    waveDecorate=document.querySelector('.waveDecorate');

    wave.addEventListener('animationend', () => {
        wave.classList.remove('wave');
        void wave.offsetWidth;
        wave.classList.add('wave');
        wave.style.animationPlayState = "paused"; 
    });

    waveDecorate.addEventListener('animationend', () => {
        var target = waveDecorate;
        target.classList.remove('waveDecorate');
        void target.offsetWidth;
        target.classList.add('waveDecorate');
        target.style.animationPlayState = "paused";
    });
    spawnBottles();
}

function cleanField() {
    setTimeout(cleanField, waveTimer);
    if(timeObject==true){
    var style = wave.style;
    style.animationPlayState = "running";
    var style2 = waveDecorate.style;
    style2.animationPlayState = "running";
    setTimeout(cleanBottle, 500);
    setTimeout(spawnBottles, 500);
    }
    console.log(timeObject);

}

function sometimesCleanField(){
    if(timeObject==true){
        var style = wave.style;
        style.animationPlayState = "running";
        var style2 = waveDecorate.style;
        style2.animationPlayState = "running";
        setTimeout(cleanBottle, 500);
        setTimeout(spawnBottles, 500);
        }
    console.log(timeObject);
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

    var bottleskin=Math.random();
    if(bottleskin>0.5){
        
    bottle.style.backgroundImage='url("../src/Assets/Images/bottle_lie_small.png")';
    }
    else{

        bottle.style.backgroundImage='url("../src/Assets/Images/bottle_in sand_small.png")';
        bottle.style.height="250px";
        bottle.style.width="348px";
    }
    

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
