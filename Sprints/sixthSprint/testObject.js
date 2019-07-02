console.log("test object js is called");

class controlobject {
    constructor(canvas, x,y,w,h){
        this.objectSet = []
        //an empty list is made to keep rectangle on screen
        console.log("test object constructor");
        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.mouseDown = false;
        //variables defines the measurements for the boundary rectangle and its position coordinates
        this.x= x;
        this.y = y;
        this.w = w;
        this.h = h;
        //variables define the width and height for the rectangle that is drawn on the screen
        this.dw = 0;
        this.dh = 0;
        
        //for boundary of rectangle
        this.rectBound = false 

        //listeners called
        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));
        
        this.objectSet = [];
    }

        mDown(e){
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;
        if(this.rectBound == true){
            //this.mouseDown = true;
            this.dragging = true;
        }

        }

        mMove(e){
            console.log(this.rectBound)
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        //to check mouse is inside boundary 
        this.rectBound = this.boundsCheck (this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
        //if mouse is not inside the boundary, objects cannot be set 
        if(this.rectBound== false){
        this.dragging = false;
    }
        }

        mUp(e){
        
        
        //estabishing dragging rectangle and boudary condition-if user clicked down and in boudary = draw rectangle on release of mouse
        
        if(this.dragging){
        //if(this.mouseDown == true && this.rectBound == true){
            if (Button.selectedShape == "Rectangle"){
                var tempO = new Rectangle(this.xMouseStart, this.yMouseStart, this.dw, this.dh, colourButton.selectedColour);
                this.objectSet.push(tempO);
            }else if(Button.selectedShape == "Ellipse"){
                var temp = new Ellipse(this.xMouseStart, this.yMouseStart, this.xMouse, this.yMouse, colourButton.selectedColour);
                this.objectSet.push(temp); 
            }else if (Button.selectedShape == "Circle"){
                var COne = new Circle(this.xMouse, this.yMouse, this.xMouseStart, this.yMouseStart, colourButton.selectedColour);
                this.objectSet.push(COne);
                             }
             }

   

        //this.mouseDown = false;

        this.dragging = false;


        console.log(this.objectSet);
        
        
    
    
        }
    
        update(){

            //to get rid of objects if reset button clicked
            if (Button.selectedShape == "Reset"){
                this.objectSet = [];
                Button.selectedShape = "";
            }
            //to get rid of the last object drawn in undo button clicked
            if (Button.selectedShape == "Undo"){
                this.objectSet.pop();
                Button.selectedShape = "";
                }
            
        //function for background/boundary rectangle 
        //the variables will be called again in the main which will define the position of the background/boundary reectangle   
        this.drawBoundaryRect(this.x, this.y,this.w,this.h,colArray[2][4]);

        ctx.beginPath();
            ctx.rect(this.x, this.y, this.w, this.h); // this rect is for boundary
            ctx.ellipse(this.x, this.y, this.Rx, this.Ry, this.r, this.Sa, this.Ea); // test ellispe
            //ctx.arc(this.xC, this.yC, this.r, 0, 2*Math.PI);
            ctx.fillStyle = colArray[0][0]; //colour
            ctx.strokeStyle = "rgb(0,255,255)";
            ctx.lineWidth = 5;
            ctx.fill();
            ctx.stroke();

            
           for (var i=0; i<this.objectSet.length; i++){
                this.objectSet[i].update();

                
            
            }
          
         //this is for the dragging rectangle    
        this.dw = this.xMouse - this.xMouseStart;
        this.dh = this.yMouse - this.yMouseStart;
       
       
        //circles, elipses and rectangles can be drawn if mouse has started and finished dragging
        //inside the boundary box
        if(this.dragging == true && this.rectBound == true){
                this.draw();
                
        }
                

            
        }
        

        draw(){
            //for the dragging rectangle
            this.drawRect(this.xMouseStart, this.yMouseStart, this.dw, this.dh);
            
       
    
           

        }
        //this function draw the rectangle that is dragged 
        drawRect(x,y,w,h){
            ctx.beginPath();
            ctx.rect(x,y,w,h);
            ctx.lineWidth = 1;
            ctx.strokeStyle = colArray[2][3]; //determines the colour of the stroke of the dragging rectangle 
            ctx.stroke();
        }

        //draws the circle that is dragged
        drawCircle(x,y,r){
            ctx.beginPath();
            ctx.arc(x,y,r,0,2*Math.PI);
            ctx.lineWidth = 1;
            ctx.strokeStyle = colourButton.selectedColour;
            ctx.stroke();
        }

        //this function draws the background rectangle 
        drawBoundaryRect(x,y,w,h,col){
            ctx.beginPath();
            ctx.rect(x,y,w,h);
            ctx.lineWidth = 1;
            ctx.fillStyle = col; //determines the colour of the fill of the dragging rectangle 
            ctx.fill();
        }
        
        boundsCheck(xMouse, yMouse, x, y, w, h){ 
            if(xMouse > x && xMouse < x + w && yMouse > y && yMouse < y+ h){
                return true;
            }else{
                return false;
            }
            }

            

       
        



}