declare class ImageCapture {
  constructor(videoTrack: MediaStreamTrack);
  takePhoto(photoSettings?: any): Promise<Blob>;
  getPhotoCapabilities(): Promise<any>;
  getPhotoSettings(): Promise<any>;
  grabFrame(): Promise<ImageBitmap>;
  readonly track: MediaStreamTrack;
}

export class ScreenShot{
  static imgUrl:any;
  static capture():Promise<boolean>{
    return startCapture()
  }
}

export async function startCapture():Promise<boolean>{
  const displayMediaOptions:any = {
    video: {
      mediaSource: 'screen'
    },
    audio: false
  }
  var stream = null;
  var url = null;
  try{
    let screenshot = document.getElementById("uv-feedback-form-screenshot-preview-wrapper")
    let img = document.createElement("img");
    img.setAttribute('id','uv-screenshot')
    img.setAttribute('width', "376px")
    img.setAttribute('height', "235px")
    img.style.objectFit = 'cover';
    img.style.borderRadius ='4px';
    stream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
    const track = stream.getVideoTracks()[0];
    let imageCapture:any = new ImageCapture(track);
    const bitMap = await imageCapture.grabFrame();
    track.stop();
    const canvas:any = document.createElement('canvas');
    canvas.width = bitMap.width;
    canvas.height= bitMap.height;
  
    const context = canvas.getContext('2d')
    let hRatio = canvas.width / img.width;
    let vRatio = canvas.height / img.height;
    let ratio = Math.min(hRatio, vRatio);
    let centerShift_x = (canvas.width - img.width * ratio)/2;
    let  centerShift_y = (canvas.height - img.height * ratio)/2;
    context.clearRect(0,0,canvas.width, canvas.height);
    context.drawImage(bitMap, 0, 0 ,canvas.width, canvas.height,centerShift_x, centerShift_y, img.width*ratio, img.height*ratio);
    canvas.toBlob( async function(blob: any){
      url = URL.createObjectURL(blob);
      img.setAttribute('src', url);
      screenshot?.appendChild(img);
      ScreenShot.imgUrl = url;
    })
    return true;
}
  catch(err){
    return false;
  }

}


function DownloadCanvasAsImage(){
  let downloadLink = document.createElement('a');
  downloadLink.setAttribute('download', `photo_${new Date()}.jpg`);
  let canvas:any = document.getElementById('screenshot');
  canvas.toBlob(function(blob:any) {
    let url = URL.createObjectURL(blob);
    downloadLink.setAttribute('href', url);
    downloadLink.click();
  });
}