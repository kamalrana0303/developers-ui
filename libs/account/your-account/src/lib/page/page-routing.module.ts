import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PageComponent } from './page/page.component';

const routes: Routes = [
  
  {
    path: "", component: PageComponent, children: [
      // {
      //   path:"", loadChildren: ()=> import("), pathMatch:'full'
      // },
      {
        path: "", loadChildren: ()=> import("@developers/profile/page").then(m=>m.ProfilePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PageRoutingModule { }