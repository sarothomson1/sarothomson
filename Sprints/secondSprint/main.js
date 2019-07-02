console.log("main is called");
objectSet= [];


//this controls the boundary rectangle 
var myT = new controlobject(canvas,250,30,500,550);



console.log("hello")



function animate(){
    ctx.clearRect(0,0,width,height);
    myT.update();

    



    window.requestAnimationFrame(animate);

}
animate();