var bottleNum = 0;
var maxBottleNum = 8;
var spawnInterval = 500;
var field;
var fieldWidth;
var fieldHeight;
var wave;

initialize();

function initialize() {
    field = document.getElementById('beach');
    fieldWidth = field.offsetWidth;
    fieldHeight = field.offsetHeight;

    wave = document.getElementById('wave');
    wave.addEventListener('animationend', () => {
        wave.classList.remove('wave');
        void wave.offsetWidth;
        wave.classList.add('wave');
        wave.style.animationPlayState = "paused";
    });

    const animated = document.querySelector('.wave');
    animated.addEventListener('animationend', () => {
        var target = wave[0];
        target.classList.remove('wave');
        void target.offsetWidth;
        target.classList.add('wave');
        target.style.animationPlayState = "paused";
    });

    spawnBottles();
}

function cleanField() {
    var style = wave.style;
    style.animationPlayState = "running";
    setTimeout(cleanBottle, 500);
    setTimeout(spawnBottles, 500);
}

function spawnBottle() {
    if (bottleNum >= maxBottleNum)
        return;

    var bottle = document.createElement('button')
    
    bottle.className = "bottle";
    bottle.style.position = 'absolute';
    bottle.style.left = String((Math.random()*100)%100) + '%';
    bottle.style.top = String((Math.random()*100)%100) + '%';
    bottle.style.zIndex = String(count);

    var image = document.createElement('img');
    image.className = "bottleImage";
    // image.src = './image/letter.svg';
    bottle.appendChild(image);
    field.appendChild(bottle);

    bottleNum += 1;
}

function spawnBottles() {
    for (var i = bottle; i < maxBottleNum; i++) {
        spawnBottle();
    }
}

function deleteBottle(bottle) {
    bottle.parentNode.removeChild(bottle);
}

function cleanBottle() {
    var child = field.lastElementChild;  
        while (child) { 
            deleteBottle(child);
            // beach.removeChild(child); 
            child = field.lastElementChild; 
            bottleNum -= 1;
        } 
}
