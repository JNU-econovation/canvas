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
    firebase.database().ref('letters').once('value').then((snapshot) => {

        var username = (snapshot.val() && snapshot.val().content) || 'Anonymous';
        letter.innerHTML = username;
        console.log(username);
        console.log(inputBox.value + " was succesfully loaded");
    });

}
