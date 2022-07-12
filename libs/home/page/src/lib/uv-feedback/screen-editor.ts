export  class ImageEditor{
    private canvas: any;
    private preview : any;
    private _sizeOfCorp = 32;
    private layers: any;
    private currentLayer = 0;
    private mouseDown:boolean =false;
    private selection =[0,0]
    constructor(){}
    init(){
        this.layers = [
            //bottom
            {
                "0-0": [0,0]
            },
            //middle
            {},
            //top
            {}
        ]
        this.preview = document.getElementById("uvFeedbackHighlightdialogannotation-preview-id");
        this.canvas = document.getElementById("uvFeedbackHighlightdialogannotation-canvas-id");
        this.canvas.addEventListener("mousedown",(event:any)=>{
            this.selection = ImageEditor.getCoords(event);
            this.preview.style.left = this.selection[0]*32 +"px";
            this.preview.style.top = this.selection[1]*32 + "px";
            this.mouseDown = true;
        })
        this.preview.onload = function(){
            this.draw()
        }
        this.canvas.addEventListener("mouseup", (event:any)=>{
            this.mouseDown = false;
        })
        this.canvas.addEventListener("mouseleave", (event:any)=>{
            this.mouseDown = false;
        })
        this.canvas.addEventListener("mousedown", this.addTile)
        this.canvas.addEventListener("mousemove", (event:any)=>{
            if(this.mouseDown){
                this.addTile(event)
            }
        })
    }

    addTile(event:any){
        var clicked = ImageEditor.getCoords(event);
        var key = clicked[0]+"-"+clicked[1]
        if(event.shifkey){

        }
        else{
            this.layers[this.currentLayer][key] = [this.selection[0], this.selection[1]]
        }
        this.draw()
    }

    draw(){
        var ctx = this.canvas.getContext('2d');
        ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        this.layers.forEach((layer:any) => {
            Object.keys(layer).forEach((key:any)=>{
                var positionX = Number(key.split("-")[0])
                var positionY = Number(key.split("-")[1])
                var [tileX, tileY] = layer[key];
                ctx.drawImage(
                    this.preview, 
                    tileX * 32,tileY*32,  //top left corner of the grab
                    this._sizeOfCorp, this._sizeOfCorp ,//how big of grab
                    positionX*32, positionY*32, //where you want the crop to be placed
                    this.sizeOfCorp, this.sizeOfCorp //size of the placement of what was grabbed
                )
            })
        })
    }

    public static getCoords(e:any){
        const {x,y} = e.target.getBoundingClientRect();
        const mouseX = e.clientX - x;
        const mouseY = e.clientY - y;
        return [Math.floor(mouseX/32), Math.floor(mouseY/32)]
    }

    public set sizeOfCorp(corpSize: number){
        this._sizeOfCorp = corpSize;
    }
    public get sizeOfCorp():number{
        return this._sizeOfCorp;
    }
}


