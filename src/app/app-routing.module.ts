import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnunciosComponent } from './anuncios/anuncios.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'anuncios', component: AnunciosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
