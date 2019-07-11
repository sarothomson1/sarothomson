console.log("Colour button is called"); 

class colourButton{
    constructor(x, y, w, h, stroke, fill, canvas){
        //declaring necessary variables
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.stroke = stroke;
        this.fill = fill;
    

        //delcare that the mouse location starts at 0
        this.xMouse = 0;
        this.yMouse = 0;

        this.rectBound = false;
        this.click = false;

        this.element = canvas;
        this.element.addEventListener('click', this.mClick.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
    }

    mClick(e){
        //if mouse is clicked inside button boundaries, fill chosen shape with it's colour
        if(this.rectBound == true){
            
           colourButton.selected = this;
           colourButton.selectedColour = this.fill;


        


        }
    }

    mMove(e){
        //to make x and y mouse coordinates equal to the coordinate positioning of the user's mouse
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;

        this.rectBound = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
    }

    update(){
        this.draw();
        }

    draw(){
        ctx.strokeStyle = this.stroke;
        ctx.fillStyle = this.fill;
        if(colourButton.selected == this ){
            ctx.strokeStyle = "rgb(0,0,255)";
            
        }
        else if( this.rectBound ){
            ctx.strokeStyle = "rgb(0,0,255)";
           
        }
        
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        
        ctx.lineWidth = 5;
        ctx.fill();
        ctx.stroke();

    }

   

    boundsCheck(xM, yM, x, y, w, h){ 
    if(xM > x && xM < x + w && yM > y && yM < y+ h){
        return true;
    }else{
        return false;
    }
    }

}
colourButton.selected = ""; // static variable
colourButton.selectedColour = "rgb(0,0, 0)"; // static variable
