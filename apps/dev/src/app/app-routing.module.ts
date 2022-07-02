import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { environment } from "../environments/environment";
import { BucketComponent } from "./bucket/bucket.component";
import { AuthGuardGuard } from "./guard/auth-guard.guard";

export const routes:Routes=[ 

    {
        path:"account",component:MainComponent,canActivate: [AuthGuardGuard] ,
        children:[ 
            
             {
                path: "", loadChildren: ()=> import("@developers/home/page").then(m=>m.HomePageModule), pathMatch: "full"
             },
            {
               path:"personal-info" ,loadChildren: ()=>import("@developers/account/your-account").then(m=> m.fromAccountPage.YourAccountPage)
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