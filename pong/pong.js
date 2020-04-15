//create canvas
const cvs = document.getElementById("pong");
const ctx = cvs.getContext("2d");

//user paddle

const user = {
    x : 0,
    y : cvs.height/2 - 100/2,
     width : 10,
    height : 100,
    color : "green",
    score : 0
}

//computer paddle

const com = {
    x : cvs.width -10,
    y : cvs.height/2 - 100/2,
     width : 10,
    height : 100,
    color : "red",
    score : 0
}

//draw rect
function drawRect(x,y,w,h, color){
    
    ctx.fillStyle = color;
    ctx.fillRect(x,y,w,h);
    
}

drawRect(0,0,cvs.width, cvs.height, "black");

//draw Ball

function drawBall(x,y,r,color){
    
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2,false);
    ctx.closePath();
    ctx.fill();
}

drawBall(100,100,50,"white");

//draw text

function drawText(text,x,y,color){
    ctx.fillStyle = color;
    ctx.font = "45px fantasy";
    ctx.fillText(text, x,y);
}

drawText("hello", 300, 300, "white");
























