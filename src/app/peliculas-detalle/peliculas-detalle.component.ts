import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-peliculas-detalle',
  templateUrl: './peliculas-detalle.component.html',
  styleUrls: ['./peliculas-detalle.component.css']
})
export class PeliculasDetalleComponent implements OnInit {

  pelicula  = [];
  idPelicula;
  constructor(private httpClient:HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    let url = "https://swapi.co/api/films/";
    this.idPelicula = this.route.snapshot.paramMap.get("id");
    let pagina = url + this.idPelicula;
    console.log(this.idPelicula);
    console.log(pagina);
    let resp = this.httpClient.get(pagina);  
    resp.subscribe((data: any[])=>{
      console.log(data);
      this.pelicula = data;
    })  
  }

}
