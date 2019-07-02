console.log("main is called");
objectSet= [];

//var objectOne = new controlobject(canvas);
//objectSet.push(objectOne);

//this controls the boundary rectangle 
var myT = new controlobject(canvas,250,30,500,550);

var reset = new Button ("Reset", 130, 500, 110, 50, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var undo = new Button("Undo", 10, 500, 110, 50, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);

var butOne = new Button("Rectangle", 10, 70, 110, 50, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var butTwo = new Button("Ellipse", 130, 70, 110, 50, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var butThree = new Button("Circle", 10, 140, 110, 50, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var butFour = new Button("Line", 130, 140, 110, 50, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var butFive = new Button("Brush", 10, 210, 110, 50, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);

var cButOne = new colourButton(30, 300, 40, 40, "rgb(255,0,0)",colArray[0][3], canvas);
var cButTwo = new colourButton(90, 300, 40, 40, "rgb(255,0,0)", colArray[0][4], canvas);
var cButThree = new colourButton(150, 300, 40, 40, "rgb(255,0,0)", colArray[0][5], canvas);
var cButFour = new colourButton(30, 360, 40, 40, "rgb(255,0,0)", colArray[0][6], canvas);
var cButFive = new colourButton(90, 360, 40, 40, "rgb(255,0,0)", colArray[0][7], canvas);
var cButSix = new colourButton(150, 360, 40, 40, "rgb(255,0,0)", colArray[0][8], canvas);
var cButSeven = new colourButton(30, 420, 40, 40, "rgb(255,0,0)",colArray[2][3], canvas);
var cButEight = new colourButton(90, 420, 40, 40, "rgb(255,0,0)",colArray[2][4], canvas);
var cButNine = new colourButton(150, 420, 40, 40, "rgb(255,0,0)",colArray[2][6], canvas);
objectSet.push(reset, undo, butOne, butTwo, butThree, butFour, butFive, cButOne, cButTwo, cButThree, cButFour, cButFive, cButSix,
    cButSeven, cButEight, cButNine);





function animate(){
    ctx.clearRect(0,0,width,height);
    myT.update();

    for(var i=0; i<objectSet.length; i++){
        objectSet[i].update();
    }



    window.requestAnimationFrame(animate);

}
animate();