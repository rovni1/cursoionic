import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,

      children: [{

        path: 'peliculas',
          children:[
            {
              path: '',
              loadChildren: '../pages/explorar/peliculas/peliculas.module#PeliculasPageModule'
            }
          ]
        },
        
        {
          path: 'musica',
          children:[
            {
              path: '',
              loadChildren: '../pages/explorar/musica/musica.module#MusicaPageModule'
            }
          ]  
        },
        
        { 
          path: 'libros',
          children:[
            {
              path: '',
              loadChildren: '../pages/explorar/libros/libros.module#LibrosPageModule'
            }
          ]
      }
        

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
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
