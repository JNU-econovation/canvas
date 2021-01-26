//시간에 따른 배경색

var current = new Date(); // 현재 시간 값을 가진 Date 객체 생성
if(current.getHours() < 4) {
    document.querySelector(".sky").style.background = "#000000"; //검정
}
else if(current.getHours() < 5) {
    document.querySelector(".sky").style.background = 
    "linear-gradient(0deg, rgba(1,0,94,1) 0%, rgba(0,0,20,1) 100%)"; //검정 남색
}
 else if(current.getHours() < 6) {
    document.querySelector(".sky").style.background =  //검정 남색 파랑
    "linear-gradient(0deg, rgba(97,116,203,1) 9%, rgba(1,0,94,1) 81%, rgba(1,0,60,1) 100%)";
}
else if(current.getHours() < 7) {
    document.querySelector(".sky").style.background =  // 해돋이
    "linear-gradient(0deg, rgba(255,116,28,1) 0%, rgba(233,191,89,1) 31%, rgba(142,171,255,1) 100%)"; 
}
else if(current.getHours() < 10) {
    document.querySelector(".sky").style.background =  // 7-10 하늘
    "linear-gradient(0deg, rgba(232,239,255,1) 0%, rgba(191,227,255,1) 100%)";
}
else if(current.getHours() < 14) { //10-14 하늘
    document.querySelector(".sky").style.background = "#BFE3FF"; 
}
else if(current.getHours() < 17) { //14-17 하늘
    document.querySelector(".sky").style.background = 
    "linear-gradient(0deg, rgba(161,193,255,1) 0%, rgba(191,227,255,1) 100%)";
}
else if(current.getHours() < 18) {
    document.querySelector(".sky").style.background = 
    "linear-gradient(0deg, rgba(226,176,207,1) 0%, rgba(180,183,222,1) 47% , rgba(148,187,232,1) 81%, rgba(148,187,232,1) 100%)";
    //17-18시 노을
}
else if(current.getHours() < 19) {
    document.querySelector(".sky").style.background = 
    "linear-gradient(0deg, rgba(36,42,134,1) 0%, rgba(97,116,203,1) 39% , rgba(226,176,207,1) 100%)";
}
else if(current.getHours() < 20) {
    document.querySelector(".sky").style.background = 
    "linear-gradient(0deg, rgba(1,0,94,1) 0%, rgba(0,0,20,1) 100%)"; //검정 남색
}
else if(current.getHours() < 24) {
    document.querySelector(".sky").style.background = "#000000"; //검정
}


//document.write("현재 시간 : ");
document.write(current.getHours(), " : ");
document.write(current.getMinutes(), " : ");
document.write(current.getSeconds(), "<br>");