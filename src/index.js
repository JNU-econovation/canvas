


/* Initialize Firebase
var config = {
  apiKey:"ABCDEFG",
  authDomain:"fir-example-ec491.firebaseapp.com",
  databaseURL:"https://fir-example-ec491.firebaseio.com",
  projectId:"fir-example-ec491",
  storageBucket:"fir-example-ec491.appspot.com",
  messagingSenderId:""
};
firebase.initializeApp(config);

var newPostKey = firebase.database().ref().child('posts').push().key;

var postData = {
  brdno: newPostKey,
  Letterskin:"편지지 종류",
  sticker:"스티커",
  brdmemo:"게시물 내용",
  like:"하트"
  brddate: Date.now()
};


*/

function chooseWhite(){
	//const writingPad = document.querySelector('#writePopup');

	document.getElementById("writePopup").className="whiteSkin";
}

function chooseRed(){
	document.getElementById("writePopup").className="redSkin";
}

function chooseBlue(){
	document.getElementById("writePopup").className="blueSkin";
}

function chooseGreen(){
	document.getElementById("writePopup").className="greenSkin";
}

function letterPopup() {
	const popup1 = document.querySelector('#letterPopup');

  popup1.classList.remove('hide');

	var string = document.getElementById("letterContents");
	loadLetter(document.getElementById("bottle")).then(value => { string.innerText= value.content
});
}

function closeLetterPopup() {
	const popup2 = document.querySelector('#letterPopup');
  popup2.classList.add('hide');
}
function writePopup() {
	const popup3 = document.querySelector('#writePopup');

  popup3.classList.remove('hide');

	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1; //January is 0!
	var yyyy = today.getFullYear();
	if (dd < 10) {
	  dd = '0' + dd;
	}
	if (mm < 10) {
	  mm = '0' + mm;
	}
	var today = mm + '/' + dd + '/' + yyyy;

	var string = document.getElementById("letterDate");
	string.innerText=today;
	//document.getElementById("letterDate").innerHTML=replacedString;
}

function closeWritePopup() {
	const popup4 = document.querySelector('#writePopup');
  popup4.classList.add('hide');
}
