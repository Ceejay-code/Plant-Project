var slide = document.getElementById('slideimage');
var back = document.getElementById('back');
var next = document.getElementById('next');

var image = new Array(
    "images/pic-1.jpg",
    "images/pic-2.jpg",
    "images/pic-3.jpg",
    "images/pic-4.jpg"
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
