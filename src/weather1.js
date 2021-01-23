//시간에 따른 해, 달, 갈매기

var current = new Date(); // 현재 시간 값을 가진 Date 객체 생성
if(current.getHours() < 5) {
    document.querySelector(".sun").style.display="none";    //0-5 해X
    document.querySelector(".moon").style.display="block";   //0-5 달O
    document.querySelector(".star").style.display="block";   //0-5  별O
    document.querySelector(".seagull").style.display="block"; //갈매기X
}
else if(current.getHours() < 6) {
    document.querySelector(".sun").style.display="none";    //5-6 해X
    document.querySelector(".moon").style.display="block";   //5-6 달O
    document.querySelector(".star").style.display="block";   //5-6  별X
    document.querySelector(".seagull").style.display="block"; //갈매기X
}
else if(current.getHours() < 18) {
    document.querySelector(".sun").style.display="block";   //6-18 해O
    document.querySelector(".moon").style.display="none";   //6-18 달X
    document.querySelector(".star").style.display="none";   //6-18 별X
    document.querySelector(".seagull").style.display="block"; //갈매기O
} 
else if(current.getHours() < 19) {
    document.querySelector(".sun").style.display="none";   //18-19 해X
    document.querySelector(".moon").style.display="block";  //18-19 달O
    document.querySelector(".star").style.display="none";   //18-19 별X
    document.querySelector(".seagull").style.display="block"; //갈매기O
} 
else if(current.getHours() < 24) {
    document.querySelector(".sun").style.display="none";    //18-24 해X
    document.querySelector(".moon").style.display="block";   //18-24 달O
    document.querySelector(".star").style.display="block";   //18-24  별O
    document.querySelector(".seagull").style.display="block"; //갈매기X
} 
