import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'compras', loadChildren: './pages/compras/compras.module#ComprasPageModule' },
  { path: 'cuenta', loadChildren: './pages/cuenta/cuenta.module#CuentaPageModule' },
  { path: 'ajustes', loadChildren: './pages/ajustes/ajustes.module#AjustesPageModule' },
  { path: 'peliculas', loadChildren: './pages/explorar/peliculas/peliculas.module#PeliculasPageModule' },
  { path: 'musica', loadChildren: './pages/explorar/musica/musica.module#MusicaPageModule' },
  { path: 'libros', loadChildren: './pages/explorar/libros/libros.module#LibrosPageModule' },
  { path: 'tab1', loadChildren: './tabs/tab1/tab1.module#Tab1PageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
