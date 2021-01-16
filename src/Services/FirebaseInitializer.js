fetch("blahblah")
.then(response => response.json())
.then (data => {
  var firebaseConfig = {
    apiKey: data.apiKey,
    authDomain: data.authDomain,
    projectId: data.projectId,
    storageBucket: data.storageBucket,
    messagingSenderId: data.messagingSenderId,
    appId: data.appId
    };
    firebase.initializeApp(firebaseConfig);
})
