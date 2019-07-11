console.log("button1 js called");

class Button{
    constructor(text, x, y, w, h, stroke, fill, textC, over, canvas){
        //defining variables - all of these must be declared when creating button
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.stroke = stroke;
        this.fill = fill;
        this.textC = textC;
        this.text = text;
        this.over = over;

        //delcare that the mouse location starts at 0
        this.xMouse = 0;
        this.yMouse = 0;

        //everything set to false to begin, as actions are put into effect in program under conditions
        //that aspects of the program are 'true'
        this.rectBound = false;
        this.click = false;

        this.element = canvas;
        this.element.addEventListener('click', this.mClick.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
    }

    mClick(e){
        if(this.rectBound == true){
            
            Button.selected = this;

            Button.selectedShape = this.text;


        }
    }

    mMove(e){
        //to make x and y mouse coordinates equal to the coordinate positioning of the user's mouse
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;

        //console.log("mouse move"); 
        this.rectBound = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
    }

    update(){
        this.draw();
        this.writeText();
        }

    draw(){
        //setting the colour of button when clicked, hovered over and just sitting 
        if(Button.selected == this ){
            ctx.fillStyle = colArray[2][4];
            
        }
        else if( this.rectBound ){
            ctx.fillStyle = this.over;
           
        }else{
            ctx.fillStyle = this.fill
        }
        
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        // ctx.fillText(this.text, this.w/2,this.h/2 );
        ctx.strokeStyle = this.stroke;
        ctx.lineWidth = 5;
        ctx.fill();
        ctx.stroke();

    }

    //setting parameters in which text on top of buttons will follow
    writeText(){
        ctx.fillStyle = this.textC;
        ctx.font = "25px sans-serif";
        ctx.textAlign = "center";
        const baseline = ['middle'];
        ctx.textBaseline = baseline;
        ctx.fillText(this.text,this.x + this.w/2,this.y + this.h/2);
    }

    //test to ensure user is moving mouse within button boundaries
    boundsCheck(xM, yM, x, y, w, h){ 
    if(xM > x && xM < x + w && yM > y && yM < y+ h){
        return true;
    }
    //if test returns false, mouse is not in boundary so button cannot be clicked
    else{
        return false;
    }
    }

}
Button.selected = "";
Button.selectedShape = ""; //universal variable