import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [
  {
    path: "auth",
    loadChildren:()=> import("./auth/auth.module").then( m => m.AuthModule)
  },
  {
    path: "heroes",
    loadChildren:()=> import("./heroes/heroes.module").then( m => m.HeroesModule)
  },
  {
    path: "404",
   component: Error404PageComponent //esto viene de sharedmodule
  }
  ,
  {
    path:"",
    redirectTo: "heroes",
    pathMatch: "full" //que sea exactamente vacio ""
  },
  {
    path: "**",
    redirectTo: "404", //cualquier otra pagina
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
