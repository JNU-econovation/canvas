//시간에 따른 배경색

var current = new Date(); // 현재 시간 값을 가진 Date 객체 생성
if(current.getHours() < 4) {
    document.querySelector(".sky").style.background = "#000000"; //검정
}
else if(current.getHours() < 6) {
    document.querySelector(".sky").style.background = "#000093"; //남색
}
 else if(current.getHours() < 8) {
    document.querySelector(".sky").style.background = "#1266FF"; //파랑
}
else if(current.getHours() < 10) {
    document.querySelector(".sky").style.background = "#5AAEFF"; //하늘
}
else if(current.getHours() < 14) {
    document.querySelector(".sky").style.background = "#90E4FF"; //연한하늘
}
else if(current.getHours() < 17) {
    document.querySelector(".sky").style.background = "#5AAEFF"; //하늘
}
else if(current.getHours() < 18) {
    document.querySelector(".sky").style.background = 
    "linear-gradient(0deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 79%, rgba(109,171,244,1) 100%)";
    //17-18시 노을
}
else if(current.getHours() < 19) {
    document.querySelector(".sky").style.background = "#1266FF"; //파랑
}
else if(current.getHours() < 20) {
    document.querySelector(".sky").style.background = "#000093"; //남색
}
else if(current.getHours() < 24) {
    document.querySelector(".sky").style.background = "#000000"; //검정    
}


//document.write("현재 시간 : ");
document.write(current.getHours(), " : ");
document.write(current.getMinutes(), " : ");
document.write(current.getSeconds(), "<br>");