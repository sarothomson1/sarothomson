console.log("main is called");
objectSet= [];

//var objectOne = new controlobject(canvas);
//objectSet.push(objectOne);

//this controls the boundary rectangle 
var myT = new controlobject(canvas,250,30,500,550);


var butOne = new Button("Rectangle", 50, 40, 120, 50, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var butTwo = new Button("Ellipse", 50, 110, 120, 50, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);

var cButOne = new colourButton(30, 200, 40, 40, "rgb(255,0,0)",colArray[0][3], canvas);
var cButTwo = new colourButton(90, 200, 40, 40, "rgb(255,0,0)", colArray[0][4], canvas);
var cButThree = new colourButton(150, 200, 40, 40, "rgb(255,0,0)", colArray[0][5], canvas);
var cButFour = new colourButton(30, 260, 40, 40, "rgb(255,0,0)", colArray[0][6], canvas);
var cButFive = new colourButton(90, 260, 40, 40, "rgb(255,0,0)", colArray[0][7], canvas);
var cButSix = new colourButton(150, 260, 40, 40, "rgb(255,0,0)", colArray[0][8], canvas);
objectSet.push(butOne, butTwo, cButOne, cButTwo, cButThree, cButFour, cButFive, cButSix);





function animate(){
    ctx.clearRect(0,0,width,height);
    myT.update();

    for(var i=0; i<objectSet.length; i++){
        objectSet[i].update();
    }



    window.requestAnimationFrame(animate);

}
animate();