import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { environment } from "../environments/environment";
import { BucketComponent } from "./bucket/bucket.component";
import { AuthGuardGuard } from "./guard/auth-guard.guard";
export const routes:Routes=[ 
    {
        path:"auth",component:MainComponent,canActivate: [AuthGuardGuard] , children:[           
            {
                path:"profile" ,loadChildren: ()=>import("@developers/profile/page").then(m=> m.ProfilePageModule)
            },
            {
                
            }
        ] 
    },
    {
        path:"token", component: BucketComponent
    },
    

    
]

@NgModule({
    imports:[RouterModule.forRoot(routes, {useHash: false, enableTracing: environment.enableTracing})],
    exports:[RouterModule],
})
export class AppRoutingModule{

}