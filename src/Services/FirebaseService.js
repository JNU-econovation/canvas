function writeLetter(button, content, skinIndex) {
    button.disabled = true;

    var offsetVal;
    var serverTime;
    firebase.database().ref("/.info/serverTimeOffset")
    .once('value', function(offset) {
        offsetVal = offset.val() || 0;
        serverTime = Date.now() + offsetVal;
    })
    .then(function() {
        var newPostKey = firebase.database().ref().child('letters').push().key;
        firebase.database().ref('letters/' + newPostKey).set({
              content: content,
              timestamp: serverTime,
              skinIndex : skinIndex
          });
        button.disabled = false;
    });
}

function loadLetter(button) {
    button.disabled = true;
    firebase.database().ref().child('letters').once('value').then((snapshot) => {
        var length = snapshot.numChildren();
        var randNum = Math.floor( Math.random() * 10 ) % length;
        var count = 0;
        
        snapshot.forEach(function(child) {
            if (count == randNum) {
                // letter.innerHTML = child.val().content;
            }
            count += 1;
        });

        button.disabled = false;
    });
}
