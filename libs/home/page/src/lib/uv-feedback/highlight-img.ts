export class HighlightImage{
    static canvas: any;
    static ctx :any;
    static preview :any;
    private isDown = false;
    static shape: any[] =[]
    private cur =0 ;

    constructor(){}
    init(){
  
        HighlightImage.canvas = document.getElementById("uvFeedbackHighlightdialogannotation-canvas-id");
        HighlightImage.preview = document.getElementById("uvFeedbackHighlightdialogannotation-preview-id")
        HighlightImage.ctx = HighlightImage.canvas.getContext('2d');
        HighlightImage.ctx.strokeStyle = "#dd8828";
        HighlightImage.ctx.lineWidth = 2;
        
        HighlightImage.preview.addEventListener('load', ()=>{
            HighlightImage.ctx.drawImage(HighlightImage.preview, 0,0, HighlightImage.canvas.width, HighlightImage.canvas.height)
        })
        HighlightImage.canvas.addEventListener('pointerup',(e:any)=>{
            this.handleMouseUp(e)
        })
        HighlightImage.canvas.addEventListener('pointerout',(e:any)=>{
            this.handleMouseOut(e);
        })
        HighlightImage.canvas.addEventListener('pointerdown',(e:any)=>{
            this.handleMouseDown(e)
        })
        HighlightImage.canvas.addEventListener('pointermove', (e:any)=>{
            this.handleMouseMove(e)
        })
        
    }



    getMousePos(event:any){
        var rect = HighlightImage.canvas.getBoundingClientRect();
        return {
            x: Math.floor(event.clientX - rect.left),
            y: Math.floor(event.clientY - rect.top)
        }
    }

    updateFrame(){
        HighlightImage.shape.forEach((el:any)=>{
        
            HighlightImage.ctx.strokeRect(el.x1, el.y1, el.x2 - el.x1, el.y2 - el.y1);
        });
    }
    
    handleMouseDown(e:any){
        this.isDown = true;
        let start:any = this.getMousePos(e)
        let end :any = this.getMousePos(e)
        HighlightImage.shape.push({
          x1: start.x,
          y1: start.y,
          x2: end.x,
          y2: end.y
        });
        e.preventDefault()
    }

    handleMouseUp(e:any){
        this.cur += 1;
     //   document.getElementById("uvFeedbackHighlightdialogannotation-close-icon-id")?.appendChild()
        this.isDown = false;
        e.preventDefault()
    }

    handleMouseOut(e:any){
        this.isDown = false;
        e.preventDefault()
    }

    handleMouseMove(e:any){
        if (this.isDown) {
            let d:any= document.getElementById("uvFeedbackHighlightdialogclose-icon-canvas-id")
            HighlightImage.ctx.clearRect(0, 0, HighlightImage.canvas.width, HighlightImage.canvas.height);
            let mouse:any = this.getMousePos(e);
            HighlightImage.shape[this.cur].x2 = mouse.x;
            HighlightImage.shape[this.cur].y2 = mouse.y;
            requestAnimationFrame(this.updateFrame);
        }
        else{
            let pos = this.getMousePos(e);
            HighlightImage.shape.forEach(coord=> {
                let maxX = Math.max(coord.x1, coord.x2)
                let maxY = Math.max(coord.y1, coord.y2)
                let minX = Math.min(coord.x1, coord.x2)
                let minY = Math.min(coord.y1, coord.y2)
            
                if((pos.x < maxX && pos.x > minX ) && (pos.y < maxY && pos.y > minY )){
              
                    let d:any= document.getElementById("uvFeedbackHighlightdialogclose-icon-canvas-id")
                    d.style.top =  minY-10+"px";
                    d.style.left = minX-10+"px";
                    d.style.position = 'absolute';
                    
                    d.style.zIndex = 1;
                    d.style.display = 'block';
                }
            })
        }
    }

    destroy(){
        HighlightImage.canvas = null;
        HighlightImage.preview = null;
        HighlightImage.ctx = null;
        HighlightImage.shape = []
    }
}