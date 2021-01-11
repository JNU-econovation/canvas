var inputBox = document.getElementById("inputBox");
var saveButton = document.getElementById("saveButton");
saveButton.addEventListener('click', saveLetter);
var loadButton = document.getElementById("loadButton");
loadButton.addEventListener('click', loadLetter);
var letter = document.getElementById("letter");

function saveLetter() {

    var newPostKey = firebase.database().ref().child('letters').push().key;
    firebase.database().ref('letters/' + newPostKey).set({
        content: inputBox.value
    });

    console.log(inputBox.value + " was succesfully saved");
}

function loadLetter() {
    firebase.database().ref().child('letters').once('value').then((snapshot) => {
        var length = snapshot.numChildren();
        var randNum = Math.floor( Math.random() * 10 ) % length;
        var count = 0;
        snapshot.forEach(function(child) {
            if (count == randNum) {
                letter.innerHTML = child.val().content;
            }
            count += 1;
        });
    });
}
