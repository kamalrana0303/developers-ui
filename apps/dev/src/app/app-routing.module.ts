import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { environment } from "../environments/environment";
import { BucketComponent } from "./bucket/bucket.component";
import { AuthGuardGuard } from "./guard/auth-guard.guard";
export const routes:Routes=[ 
    {
        path: "", component: BucketComponent
    },
    {
        path:"auth",component:MainComponent,canActivate: [AuthGuardGuard] ,
         children:[           
            {
               path:"home" ,loadChildren: ()=>import("@developers/account/your-account").then(m=> {
                   return m.PageModule
               })
            }
        ] 
    },
    {
        path:"token", component: BucketComponent
    }
    
]

@NgModule({
    imports:[RouterModule.forRoot(routes, {useHash: false, enableTracing: environment.enableTracing})],
    exports:[RouterModule],
})
export class AppRoutingModule{

}