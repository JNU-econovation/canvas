//시간에 따른 해, 달, 갈매기

var current = new Date(); // 현재 시간 값을 가진 Date 객체 생성
if(current.getHours() < 6) {
    document.querySelector(".sun").style.display="none";    //0-6 해X
    document.querySelector(".moon").style.display="block";   //0-6 달O
    document.querySelector(".star").style.display="block";   //0-6  별O
    document.querySelector(".seagull").style.display="block"; //갈매기X
}
else if(current.getHours() < 18) {
    document.querySelector(".sun").style.display="block";   //6-18 해O
    document.querySelector(".moon").style.display="none";   //6-18 달X
    document.querySelector(".star").style.display="none";   //6-18 별X
    document.querySelector(".seagull").style.display="nonek"; //갈매기O
} 
else if(current.getHours() < 24) {
    document.querySelector(".sun").style.display="none";    //18-24 해X
    document.querySelector(".moon").style.display="block";   //18-24 달O
    document.querySelector(".star").style.display="block";   //18-24  별O
    document.querySelector(".seagull").style.display="block"; //갈매기X
} 
