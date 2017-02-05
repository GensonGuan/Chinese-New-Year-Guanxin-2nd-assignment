function setup() {
  createCanvas(800,600)
  //noFill()
  angleMode(DEGREES)
  frameRate(12)
  background(40)
  
}

function draw() {
  
  
  translate(width/2,height/2)
  push()
  rotate(frameCount*3)
  
  //lerpColor(color1,color2,number from 0 to 1) 代表颜色1到颜色2的程度，0是颜色1,1是颜色2,0-1是极值
  stroke(lerpColor(color(255),color(0),(frameCount%120)/120)) //120是一个循环，到了121就循环到了1~120
  ellipse(100,0,250,250)
  rect(200,100,30,60)
  rect(200,200,200,120,60)
  
  //fill(lerpColor(color(255,148,23),color(111,125,220),frameCount/120))
  fill(lerpColor(color(225),color(0),(frameCount%120)/120))
  noStroke()
  ellipse(0,295,10,10)
  ellipse(100,0,20,20)
  fill(lerpColor(color(0),color(225),(frameCount%120)/120))
  textSize(20)
  //textAlign(CENTER)
  text('太', 50, 10)
  text('极', 130, 10)
  
  pop()
  fill(206,0,0)
  
  
  
  
  stroke(250,250,0)
  line(400,0,cos(frameCount)*400,sin(frameCount)*400)
  line(-400,0,cos(frameCount)*-400,sin(frameCount)*-400)
  
  
  

}