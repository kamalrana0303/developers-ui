import { x } from "@developers/home/data-access";

export class HighlightImage{
    private canvas: any;
    private preview :any;
    private start: any;
    private end: any;
    private isDown = false;
    private lastWidth = 0;
    private lastHeight =0;
    private shape = []

    constructor(){}
    init(){
        this.canvas = document.getElementById("uvFeedbackHighlightdialogannotation-canvas-id");
        this.preview = document.getElementById("uvFeedbackHighlightdialogannotation-preview-id");

        var ctx = this.canvas.getContext('2d');
    
        ctx.strokeStyle = "#dd8828";
        ctx.lineWidth = 2;

        this.preview.addEventListener('load', ()=>{
            ctx.drawImage(this.preview, 0,0, this.canvas.width, this.canvas.height)
        })
        this.canvas.addEventListener('mouseup',(e:any)=>{
            this.handleMouseUp(e, ctx)
        })
        this.canvas.addEventListener('mouseout',(e:any)=>{
            this.handleMouseOut(e, ctx);
        })
        this.canvas.addEventListener('mousedown',(e:any)=>{
            this.handleMouseDown(e,ctx)
        })
        this.canvas.addEventListener('mousemove', (e:any)=>{
            this.handleMouseMove(e,ctx)
        })
        
    }



    getMousePos(event:any){
        var rect = this.canvas.getBoundingClientRect();
        return {
            x: Math.floor(event.clientX - rect.left),
            y: Math.floor(event.clientY - rect.top)
        }
    }
   
    
    handleMouseDown(e:any, ctx:any){
        e.preventDefault();
        e.stopPropagation();
        this.isDown =true;
        this.start = this.getMousePos(e);
        this.end = this.getMousePos(e);
        this.lastHeight =0;
        this.lastWidth = 0;
    }

    handleMouseUp(e:any, ctx:any){
        e.preventDefault();
        e.stopPropagation();
        this.isDown = false;
    }

    handleMouseOut(e:any, ctx:any){
        e.preventDefault();
        e.stopPropagation();
        this.isDown = false;
    }

    handleMouseMove(e:any, ctx:any){
        e.preventDefault();
        e.stopPropagation();
        if(!this.isDown){
            return;
        }
        this.end = this.getMousePos(e);
        var width = this.end.x - this.start.x;
        var height = this.end.y - this.start.y;

        ctx.clearRect(this.start.x - 5, this.start.y - 5, this.lastWidth + 6, this.lastHeight+6)
        ctx.beginPath();
        ctx.rect(this.start.x, this.start.y, width, height);
        this.lastWidth = width;
        this.lastHeight = height;
        ctx.stroke();
        ctx.closePath();
        ctx.save();
        
    }

}