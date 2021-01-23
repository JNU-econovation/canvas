function writeLetter(button, content, skinIndex) {
    button.disabled = true;

    var offsetVal;
    var serverTime;

    content = XSSfilter(content);

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

function loadLetter(button) {
    var ret;

    button.disabled = true;

    return new Promise((resolve, reject) => {
        firebase.database().ref().child('letters').once('value').then((snapshot) => {
            var length = snapshot.numChildren();
            var randNum = Math.floor( Math.random() * length );
            var count = 0;
            console.log(randNum);

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

function XSSfilter(origin) {
    return origin.replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+|\-/g, "");
}
