var slide = document.getElementById('slideimage');
var back = document.getElementById('back');
var next = document.getElementById('next');

var image = new Array(
    "FIRST PROJECT/pic-1.jpg",
    "FIRST PROJECT/pic-2.jpg",
    "FIRST PROJECT/pic-3.jpg",
    "FIRST PROJECT/pic-4.jpg"
);

let i = 0;
next.onclick = function(){
    if(i < 3){
        slide.src = image[i+1];
        i++;
    }
}

back.onclick = function(){
    if(i > 0){
        slide.src = image[i-1];
        i--;
    }
}