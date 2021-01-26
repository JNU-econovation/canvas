var bottleNum = 0;
var maxBottleNum = 4;
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
    var bottleLeft;
    var bottleTop;
    
    bottle.className = "bottleLetter";
    bottle.style.position = 'absolute';
    bottleLeft = String((Math.random()*100)%100);
    bottleTop = String((Math.random()*100)%100);
    console.log(bottleLeft+" ,"+bottleTop);
    while(
        ((bottleLeft<31)&&(bottleTop<33.6))||
        (((bottleLeft<48)&&(bottleLeft>27))&&((bottleTop<62)&&(bottleTop>47.5)))||
        (((bottleLeft<69.3)&&(bottleLeft>41))&&((bottleTop<62.4)&&(bottleTop>36)))||
        (((bottleLeft<100)&&(bottleLeft>51.6))&&((bottleTop<90)&&(bottleTop>71.4)))||
        ((bottleLeft<20))&&((bottleTop<100)&&(bottleTop>85.6))||
        (bottleTop<12)
        )
        {
        bottleLeft = String((Math.random()*100)%100);
        bottleTop = String((Math.random()*100)%100);
    }
    bottle.style.left = bottleLeft + '%';
    bottle.style.top = bottleTop + '%';
    bottle.style.height='100px';8
    bottle.style.width='233px';
    bottle.style.zIndex = '0';
    bottle.style.backgroundColor='transparent';
    bottle.style.borderColor= 'transparent';
    bottle.style.border= 'none';
    bottle.style.outline= 'none';

    var bottleskin=Math.random();
    if(bottleskin<0.25){
        
    bottle.style.backgroundImage='url("../src/Assets/Images/bottle_lie_small.png")';
    }
    else if(bottleskin<0.5){

        bottle.style.backgroundImage='url("../src/Assets/Images/bottle_base_small.png")';
        bottle.style.height="229px";
        bottle.style.width="77px";
        bottle.style.zIndex="10";
    }
    else if(bottleskin<0.75){
        bottle.style.backgroundImage='url("../src/Assets/Images/bottle_in sand_2.png")';
        bottle.style.height="111px";
        bottle.style.width="141px";
        bottle.style.zIndex="10";
    }
    else{
        bottle.style.backgroundImage='url("../src/Assets/Images/bottle_starfish_small.png")';
        bottle.style.height="220px";
        bottle.style.width="77px";
        bottle.style.zIndex="10";
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
