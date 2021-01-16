function writeLetter(button, content, skinIndex) {
    button.disabled = true;

    var offsetVal;
    var serverTime;

    return new Promise((resolve, reject) => {
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
            resolve(true);
        });
    })

}

function loadLetter(button, out) {
    var ret;

    button.disabled = true;

    return new Promise((resolve, reject) => {
        firebase.database().ref().child('letters').once('value').then((snapshot) => {
            var length = snapshot.numChildren();
            var randNum = Math.floor( Math.random() * 10 ) % length;
            var count = 0;
            
            snapshot.forEach(function(child) {
                if (count == randNum) {
                    ret = child.val();
                }
                count += 1;
            });
    
            button.disabled = false;
            resolve(ret);
        });
    })
    
}
