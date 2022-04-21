import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { environment } from "../environments/environment";
import { ProfilePageModule } from "@developers/profile/page";
export const routes:Routes=[ 
    {
        path:"",component:MainComponent, children:[
           
          {
              path:"",  loadChildren: ()=> import("@developers/auth/auth-page").then(m=> m.AuthPageModule)
          }
        ] 
        
    },
  
    {
        path: 'profile', loadChildren: ()=> import("@developers/profile/page").then(m=>ProfilePageModule)
    }
    // {
    //     path: '**'
    // }
    
]

@NgModule({
    imports:[RouterModule.forRoot(routes, {useHash: true, enableTracing: environment.enableTracing})],
    exports:[RouterModule],
})
export class AppRoutingModule{

}