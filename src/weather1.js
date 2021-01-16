//시간에 따른 해와 달

var current = new Date(); // 현재 시간 값을 가진 Date 객체 생성
if(current.getHours() < 6) {
    document.querySelector(".sun").style.display="none";
    document.querySelector(".moon").style.display="block";   //0-6 달
}
else if(current.getHours() < 18) {
    document.querySelector(".sun").style.display="block";
    document.querySelector(".moon").style.display="none";   //6-18 해
} 
else if(current.getHours() < 24) {
    document.querySelector(".sun").style.display="none";
    document.querySelector(".moon").style.display="block";   //18-24 달  
}
