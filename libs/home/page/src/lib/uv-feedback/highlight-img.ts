export class HighlightImage {
    private canvas: any;
    private ctx: any;
    private preview: any;
    private isDown = false;
    private shape: any[] = []
    private cur = 0;
    public fillColor:any = 'rgba(0, 0, 255, 0.122)';
    public strokeStyle: any = '#e49b38';

    constructor(config:any) {
        this.shape = config.shape
        this.isDown = false; 
        this.canvas = document.getElementById("uvFeedbackHighlightdialogannotation-canvas-id");
        this.preview = document.getElementById("uvFeedbackHighlightdialogannotation-preview-id");
        this.ctx = this.canvas.getContext('2d');

    }

    init() {
        this.preview.addEventListener('load', () => {

            this.shape.push({
                x1: 0,
                y1: 0,
                x2: this.canvas.width,
                y2: this.canvas.height,
                area: this.canvas.width * this.canvas.height,
                fillColor: this.fillColor,
                strokeStyle: this.strokeStyle
            });
            this.cur += 1;
            requestAnimationFrame(() => { this.updateFrame(this) })
        })

        this.canvas.addEventListener('pointerup', (e: any) => {
            this.handleMouseUp(e)
        })
        this.canvas.addEventListener('pointerout', (e: any) => {
            this.handleMouseOut(e);
        })
        this.canvas.addEventListener('pointerdown', (e: any) => {
            console.log(this.shape)
            this.handleMouseDown(e)
        })
        this.canvas.addEventListener('pointermove', (e: any) => {
            this.handleMouseMove(e)
        })

    }

    getMousePos(event: any) {
        var rect = this.canvas.getBoundingClientRect();
        return {
            x: Math.floor(event.clientX - rect.left),
            y: Math.floor(event.clientY - rect.top)
        }
    }

    updateFrame(x: any) {
        x.shape.forEach((el: any, index: any) => {
            if (index == 0) {
                x.ctx.lineWidth = 1;
                x.ctx.fillStyle = 'rgba(128, 134, 139, 0.5)'
            }
            else {
                x.ctx.strokeStyle =  el.strokeStyle;
                x.ctx.lineWidth = 2;
                x.ctx.fillStyle = el.fillColor
                 //'rgba(128, 134, 139, 0.5)'
            }
            x.ctx.drawImage(this.preview,
                el.x1, el.y1,
                el.x2 - el.x1, el.y2 - el.y1,
                el.x1, el.y1,
                el.x2 - el.x1, el.y2 - el.y1)
            if (index != 0) {
                x.ctx.strokeRect(el.x1, el.y1, el.x2 - el.x1, el.y2 - el.y1);
            }
            x.ctx.fillRect(el.x1, el.y1, el.x2 - el.x1, el.y2 - el.y1);
        });
    }

    handleMouseDown(e: any) {
        this.isDown = true;
        let start: any = this.getMousePos(e)
        let end: any = this.getMousePos(e)
        this.shape.push({
            x1: start.x,
            y1: start.y,
            x2: end.x,
            y2: end.y,
            area: Math.abs(end.x - start.x) * Math.abs(end.y - start.y),
            fillColor: this.fillColor,
            strokeStyle: this.strokeStyle
        });


        e.preventDefault()
    }

    handleMouseUp(e: any) {
        if (this.shape[this.cur].area < 24 * 24) {
            this.shape.pop();
            requestAnimationFrame(()=>{this.updateFrame(this)})
        }
        else {
            this.cur += 1;
            if (this.cur == 2) {
                let annotation: any = document.getElementById('uvFeedbackHighlightdialogannotation-close-icon-id');
                let div: any = document.createElement('div');
                div.addEventListener("click", (e: any) => {
                    this.removeElement(e)
                })
                div.setAttribute('id', 'uvFeedbackHighlightdialogclose-icon-canvas-id')
                // div.style.borderRadius = '50px';
                div.style.backgroundColor = '#ebb15b';
                div.style.border = '2px solid #444746';
                div.style.height = 'fit-content';
                let img: any = document.createElement('img');
                img.setAttribute('src', '../assets/close.svg');
                img.setAttribute('height', '14px');
                img.setAttribute('width', '14px');
                div.appendChild(img);
                annotation.appendChild(div);
                div.style.display = 'none';
            }
        }

        this.isDown = false;
        e.preventDefault()
    }

    handleMouseOut(e: any) {
        this.isDown = false;
        e.preventDefault()

    }
    removeElement(e: any) {
        let i = 0;
        let selected = 0;
        //  this.shape.sort((a,b)=> b.area-a.area).forEach(coord=>{
        this.shape.forEach((coord, index) => {
            let pos: any = this.getMousePos(e);
            let maxX = Math.max(coord.x1, coord.x2)
            let maxY = Math.max(coord.y1, coord.y2)
            let minX = Math.min(coord.x1, coord.x2)
            let minY = Math.min(coord.y1, coord.y2)
            if ((pos.x < maxX && pos.x > minX) && (pos.y < maxY && pos.y > minY)) {
                selected = index;
            }

        })
        if (selected > 0) {
            this.shape.splice(selected, 1)
            this.cur = this.cur - 1;
            let closeIcon: any = document.getElementById('uvFeedbackHighlightdialogclose-icon-canvas-id');
            closeIcon.style.display = 'none';
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

            requestAnimationFrame(() => { this.updateFrame(this) });
        }
    }
    handleMouseMove(e: any) {
        if (this.isDown) {
            let d: any = document.getElementById("uvFeedbackHighlightdialogclose-icon-canvas-id")
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            let mouse: any = this.getMousePos(e);
            this.shape[this.cur].x2 = mouse.x;
            this.shape[this.cur].y2 = mouse.y;
            this.shape[this.cur].area = Math.abs(this.shape[this.cur].x2 - this.shape[this.cur].x1) * Math.abs(this.shape[this.cur].y2 - this.shape[this.cur].y1)

            // for(let i = 0; i<this.shape.length -1; i++){
            //     let obj = this.shape[i];
            //     if(Math.min(obj.x1, obj.x2) == Math.min(this.shape[this.cur].x1, this.shape[this.cur].x2)
            //     && Math.min(obj.y1, obj.y2) == Math.min(this.shape[this.cur].y1, this.shape[this.cur].y2)
            //     && obj.area == this.shape[this.cur].area
            //     ){
            //         this.shape.pop();
            //         this.cur -= 1;
            //     }
            // }
            requestAnimationFrame(() => { this.updateFrame(this) });
        }
        else {
            let pos = this.getMousePos(e);
            // this.shape.sort((a,b)=> b.area-a.area).forEach(coord=> {
            this.shape.forEach((coord, index) => {
                let maxX = Math.max(coord.x1, coord.x2)
                let maxY = Math.max(coord.y1, coord.y2)
                let minX = Math.min(coord.x1, coord.x2)
                let minY = Math.min(coord.y1, coord.y2)

                if ((pos.x < maxX && pos.x > minX) && (pos.y < maxY && pos.y > minY)) {
                    let d: any = document.getElementById("uvFeedbackHighlightdialogclose-icon-canvas-id")
                    
                    if (d != undefined && minY!=0 && minX !=0) {
                        d.style.top = minY + "px";
                        d.style.left = minX + "px";
                        d.style.position = 'absolute';
                        d.style.zIndex = 1;
                        d.style.display = 'block';
                    }
                    if(d != undefined && minY ==0 && minX ==0){
                        d.style.display = 'none'
                    }

                }
            })
        }
    }

    destroy() {
        // this.canvas = null;
        // this.preview = null;
        // this.ctx = null;
        // this.shape = []
        // this.cur =0;
    }

    updateImage() {
        let url;
        let img = document.getElementById("uv-screenshot");
        this.canvas.toBlob(async function (blob: any) {
            url = URL.createObjectURL(blob);
            console.log(url)
            img?.setAttribute('src', url);
        })
        return this.shape;
    }
}