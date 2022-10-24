
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './modules/home/pages/home-page/homepage.component';

const routes: Routes = [
  {
    path: "auth",
    //component si no se usara lazyloading, pero en este caso es una promesa
    loadChildren:()=> import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "",
    component: HomepageComponent,   //se utilizó router outlet hijo, para que no se destruyan los componentes fav, histoty.. cuando se este en el home, los demás  si se destuyen(auth)
    loadChildren:()=> import('./modules/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
