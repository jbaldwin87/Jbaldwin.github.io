document.ontouchmove = function(event){
 event.preventDefault();
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 ellipseMode(CENTER);
 stroke(0);
 noFill();
 strokeWeight(5);
}

function draw(){
 background(155);
 
 beginShape();
 for(var i=0;i<touches.length;i++){
   ellipse(touches[i].x,touches[i].y,150,150);
   vertex(touches[i].x,touches[i].y);
   var posx = floor(touches[i].x)
   var posy = floor(touches[i].y)
   fill(155,30,55);
 textSize(40);
 text("posx" + posx, touches[i].x, 75, touches[i].y - 25);
  text("posy" + posy, touches[i].x, 75, touches[i].y + 50);
  
}
endShape(CLOSE);
}



