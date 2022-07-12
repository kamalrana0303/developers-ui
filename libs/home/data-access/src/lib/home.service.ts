import { Injectable } from "@angular/core";
const displayMediaOptions: any = {
    video: {
      cursor: 'always'
    },
      audio: false
}
@Injectable({
    providedIn:'root'
})
export class HomeService{
    public capture():Promise<MediaStream>{
        return navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
    }
}