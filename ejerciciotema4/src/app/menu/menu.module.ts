import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
        {
          path: 'home',
          children: [
            {
              path:'',
              loadChildren: './home/home.module#HomePageModule'  
          }
        ] 
      },
   
      {  
          path: 'explorar',
          children: [
            {
              path:'',
              loadChildren: './tabs/tab1/tab1.module#Tab1PageModule'  
          }
        ] 
      },

      {
        path: 'compras',
        children: [
          {
            path:'',
            loadChildren: './pages/compras/compras.module#ComprasPageModule'  
        }
      ] 
      },

      {
        path: 'cuenta',
        children: [
          {
            path:'',
            loadChildren: './pages/cuenta/cuenta.module#CuentaPageModule'
        }
      ] 
      },

      {
        path: 'ajustes',
        children: [
          {
            path:'',
            loadChildren: './pages/ajustes/ajustes.module#AjustesPageModule'
        }
       ] 
      },
  
   ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
