//시간에 따른 배경색

var current = new Date(); // 현재 시간 값을 가진 Date 객체 생성
if(current.getHours() < 4) {
    document.body.style.backgroundColor = "#000000"; //검정
}
else if(current.getHours() < 6) {
    document.body.style.backgroundColor = "#000093"; //남색
}
 else if(current.getHours() < 8) {
    document.body.style.backgroundColor = "#1266FF"; //파랑
}
else if(current.getHours() < 10) {
    document.body.style.backgroundColor = "#5AAEFF"; //하늘
}
else if(current.getHours() < 14) {
    document.body.style.backgroundColor = "#90E4FF"; //연한하늘
}
else if(current.getHours() < 16) {
    document.body.style.backgroundColor = "#5AAEFF"; //하늘
}
else if(current.getHours() < 18) {
    document.body.style.backgroundColor = "#1266FF"; //파랑
}
else if(current.getHours() < 20) {
    document.body.style.backgroundColor = "#000093"; //남색
}
else if(current.getHours() < 24) {
    document.body.style.backgroundColor = "#000000"; //검정
   
       
}


//document.write("현재 시간 : ");
document.write(current.getHours(), " : ");
document.write(current.getMinutes(), " : ");
document.write(current.getSeconds(), "<br>");