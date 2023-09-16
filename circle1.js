var xPos,yPos
var i=0;
/*var colors = ['#B22937','#C11C17','#DE5003','#E27A1D','#E6AA19','#EFCE10','#E0E61A','#ACD62A',
'#80C837','#4CA82B','#228B22','#229F6E','#20B2AA','#60B6CA','#93BDE7','#7F91C3','#6F6DA7',
'#575597','#434187','#1F1D6D','#3B256D','#502E72','#80529A',
'#A670B8','#A660AC','#A650A0','#A6358C','#A63570','#A2395B'];*/

var colors = ['#A63570','#A2395B']

document.onmousemove = getXY;

//draw a bubble every 20mS
setInterval(function() {
    animateCircles(xPos,yPos)
  }, 80);

//get the mouse cursor coordinates
function getXY(event){
    xPos = event.clientX;
    yPos = event.clientY;
 }





//animate a bubble at thoe mouse coordinates
function animateCircles(x,y){
    color = colors[i];
    circSize = 20 + (Math.floor(Math.random() * 20));

    var heart = document.createElement("div");
    heart.setAttribute("class", "heart");
    
    document.body.appendChild(heart);
    
    //X&Y are randomised +/- 20px of the cursor.
    // heartLeft = 20 - (Math.floor(Math.random() * 40)) +  x ;
    // heartRight = 20 - (Math.floor(Math.random() * 40)) + y ;
    heartLeft =  x ;
    heartRight = y ;
    heart.style.left=heartLeft +"px";
    heart.style.top = heartRight+"px";
    
    var square=document.createElement("div");
    var circle1=document.createElement("div");
    var circle2=document.createElement("div");
    
    heart.appendChild(square);
    heart.appendChild(circle1);
    heart.appendChild(circle2);

    square.setAttribute("class", "heart");
    circle1.setAttribute("class", "heart");
    circle2.setAttribute("class", "heart");
    





    
    //circSize = 30;
    square.style.width = circSize + "px";
    square.style.height = circSize +"px";
    square.style.backgroundColor = color;
    
    circle1.style.width = circSize + "px";
    circle1.style.height = circSize +"px";
    circle1.style.left = parseInt(circle1.style.left-15) +"px" ;
    circle1.style.borderRadius = 30 + "px";
    circle1.style.backgroundColor = color;

    circle2.style.width = circSize + "px";
    circle2.style.height = circSize +"px";
    circle2.style.top = parseInt(square.style.top-15) +"px" ;
    circle2.style.borderRadius = 30 + "px";
    circle2.style.backgroundColor = color;

    heart.style.transform= "rotate(45deg)";

    //animate the heart
    heart.style.transition = "all 1s ease-out 0s";
    setTimeout(function() {
        heart.style.width = "0px";
        heart.style.height = "0px";
        heart.style.borderRadius= "0px";
        heart.style.opacity = 0;
        heart.style.top = heartRight-40+Math.random() * 20 +"px";
        setTimeout(function() {
            heart.remove();
        }, 2000);
    }, 20);

    //increment the color iterator and reset at array.length
    i == colors.length-1 ? i=0 : i++;
}
