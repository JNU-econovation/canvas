


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

var skinIndex=0;

function chooseOriginal(){
	//const writingPad = document.querySelector('#writePopup');

	document.getElementById("writePopupContents").className="originalSkin";
	skinIndex=0;
}

function chooseOld(){
	document.getElementById("writePopupContents").className="oldSkin";
	skinIndex=1;
}

function chooseSeafood(){
	document.getElementById("writePopupContents").className="seafoodSkin";
	skinIndex=2;
}

function countingLength(){
	var letterLength=document.getElementById("writeContents").value.length;
	document.getElementById("letterLength").innerHTML="("+letterLength+"/300)";
}

function letterPopup(button) {
timeObject=false;

	const popupBackground=document.getElementById("letterPopup");
popupBackground.classList.remove('hide');


	var string = document.getElementById("letterContents");
	loadLetter(button).then(value => { 
	

		
		if(value.skinIndex==0){
			document.getElementById("letterPopupContents").className="originalSkin";
		}
		else if(value.skinIndex==1){
			document.getElementById("letterPopupContents").className="oldSkin";
		}
		else if(value.skinIndex==2){
			document.getElementById("letterPopupContents").className="seafoodSkin";

			
		}

		const popup1 = document.getElementById("letterPopupContents");

		popup1.classList.remove('hide');

		string.innerText= value.content;
		deleteBottle(button);
});


	

}

function saveLetter(){
	var writeContentsText=document.getElementById("writeContents").value;
	if(writeContentsText!=""){
	writeLetter(document.getElementById("saveLetterButton"), writeContentsText, skinIndex).then(function(isDone){
	});
	
	document.getElementById("writeContents").value='';
	
	const popup4 = document.querySelector('#writePopup');
	popup4.classList.add('hide');

	
	
	}
	else{
		alert("빈 편지를 띄울수 없어요 TT");
		closeWritePopup();
	}
}

function closeLetterPopup() {

	timeObject=true;
	const popup1 = document.querySelector('#letterPopup');
  popup1.classList.add('hide');
  const popup2 = document.querySelector('#letterPopupContents');
  popup2.classList.add('hide');


  popup2.classList.add("content");

  if(bottleNum==0){
	sometimesCleanField();
  }
}
function writePopup() {
	timeObject=false;
	const popup3 = document.querySelector('#writePopup');

  popup3.classList.remove('hide');

	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1; //January is 0!
	var yyyy = today.getFullYear();
	var hh = today.getHours();
	if (dd < 10) {
	  dd = '0' + dd;
	}
	if (mm < 10) {
	  mm = '0' + mm;
	}
	var today = yyyy + '. ' + mm + '. ' + dd + " " + hh + "시";

	var string = document.getElementById("letterDate");
	string.innerText=today;
	//document.getElementById("letterDate").innerHTML=replacedString;
	console.log("편지쓰기");
}

function closeWritePopup() {
	timeObject=true;
	const popup4 = document.querySelector('#writePopup');
	document.getElementById("writeContents").value='';
  popup4.classList.add('hide');
}
