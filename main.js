var canvas1 = document.getElementById("my_canvas");
var ctx = canvas1.getContext('2d');
var car1_width = 120;
var car1_height = 70;
var car_1_image = "car1.png";
var car1_x = 10;
var car1_y = 10;

var car2_width = 120;
var car2_height = 70;
var car_2_image = "cars.png";
var car2_x = 10;
var car2_y = 100;

 var bg_image = "racing.jpg";

function add(){
    bg_imgTag = new Image();
    bg_imgTag.onload = uploadBackground;
    bg_imgTag.src = bg_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadCar1;
    car1_imgTag.src = car_1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadCar2;
    car2_imgTag.src = car_2_image;
};

function uploadBackground(){
    ctx.drawImage(bg_image,0,0,canvas1.width,canvas1.height);
};

function uploadCar1(){
    ctx.drawImage(car_1_image,car1_x,car1_y,car1_width,car1_height);
};

function uploadCar2(){
    ctx.drawImage(car_2_image,car2_x,car2_y,car2_width,car2_height);
};

window.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    keyPressed = e.keyCode;
    if(keyPressed == 38){
        console.log(" car 1 up arrow");
        car1_up();
    }

    if(keyPressed == 40){
        console.log("car 1 down arrow");
        car1_down();
    }

    if(keyPressed == 37){
        console.log("car 1 left arrow");
        car1_left();
    }

    if(keyPressed == 39){
        console.log("car 1 right arrow");
        car1_right();
    }
    if(keyPressed == 87){
        console.log( "car 2 up arrow");
        car2_up();
    }

    if(keyPressed == 83){
        console.log("car 2 down arrow");
        car2_down();
    }

    if(keyPressed == 65){
        console.log("car 2 left arrow");
        car2_left();
    }

    if(keyPressed == 68){
        console.log("car 2 right arrow");
        car2_right();
    }
}
