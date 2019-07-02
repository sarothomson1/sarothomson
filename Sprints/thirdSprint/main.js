console.log("main is called");
objectSet= [];

//var objectOne = new controlobject(canvas);
//objectSet.push(objectOne);

//this controls the boundary rectangle 
var myT = new controlobject(canvas,250,30,500,550);


var butOne = new Button("Rectangle", 50, 40, 120, 50, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var butTwo = new Button("Ellipse", 50, 110, 120, 50, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
objectSet.push(butOne, butTwo);




function animate(){
    ctx.clearRect(0,0,width,height);
    myT.update();

    for(var i=0; i<objectSet.length; i++){
        objectSet[i].update();
    }



    window.requestAnimationFrame(animate);

}
animate();