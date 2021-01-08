var ball;
var database,pos;

function setup(){

    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var ballpositionref = database.ref("position")
    ballpositionref.on("value",readposition)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function readposition(data){
    pos = data.val() 
    ball.x = pos.x;
    ball.y = pos.y;
}

function writePosition(x,y){
//     ball.x = ball.x + x;
//     ball.y = ball.y + y;
database.ref("position").set({
   "x":ball.x + x,
     "y":ball.y + y
})
 }
