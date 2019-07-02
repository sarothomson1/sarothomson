console.log("main is called");
objectSet= [];


//this controls the boundary rectangle 
var myT = new controlobject(canvas,250,30,500,550);
//var rectOne = new Rectangle(200, 50, 300, 100, colArray[1][2]);
//objectSet.push(rectOne);

console.log("hello")



function animate(){
    ctx.clearRect(0,0,width,height);
    //rectOne.update();
    myT.update();

    



    window.requestAnimationFrame(animate);

}
animate();