import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PeliculasDetalleComponent } from './peliculas-detalle/peliculas-detalle.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { PlanetasDetalleComponent } from './planetas-detalle/planetas-detalle.component';
import { NavesComponent } from './naves/naves.component';
import { NavesDetalleComponent } from './naves-detalle/naves-detalle.component';


const routes: Routes = [
  {path:'peliculas', component:PeliculasComponent},
  {path:'peliculasDetalle', component:PeliculasDetalleComponent},
  {path:'planetas', component:PlanetasComponent},
  {path:'planetasDetalle', component:PlanetasDetalleComponent},
  {path:'naves', component:NavesComponent},
  {path:'navesDetalle', component:NavesDetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PeliculasComponent,PeliculasDetalleComponent,PlanetasComponent,PlanetasDetalleComponent,NavesComponent,NavesDetalleComponent]
