import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

 
  peliculas = [];
  pelis = [];
  

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.consultarPeliculasServicio();
  }

  busquedadPorAnio(event, post) {
    console.log(post);
    this.peliculas["results"] = [];

    let resp = this.httpClient.get("https://swapi.co/api/films/")
    resp.subscribe(
      res => {
        let pelis = res["results"];
        console.log("pelis");
        console.log(pelis);
        pelis.forEach(element => {

            var fecha = element.release_date;
            var f = new Date(fecha);
            var anioPeli = f.getFullYear();

            console.log(fecha);
            console.log(anioPeli);

            if(post == anioPeli)
            {
              console.log("el año es igual");
              this.peliculas["results"].push(element);
            }else{
              console.log("el año es diferente");
            }

          
         
          
        });
        
    }
    );  

  }

  busquedadPorTitulo(event, titulo) {

    console.log(titulo);
    this.peliculas["results"] = [];

    let resp = this.httpClient.get("https://swapi.co/api/films/")
    resp.subscribe(
      res => {
        let pelis = res["results"];
        console.log("pelis");
        console.log(pelis);
        pelis.forEach(element => {

            var nombre = element.title;
           

            console.log(nombre);
         

            if(titulo == nombre)
            {
              console.log("el titulo es igual");
              this.peliculas["results"].push(element);
            }else{
              console.log("el titulo es diferente");
            }

          
         
          
        });
        
    }
    ); 

  }


  consultarPeliculasServicio()
  {
    let resp = this.httpClient.get("https://swapi.co/api/films/")
    resp.subscribe((data: any[])=>{
      console.log(data);
      this.peliculas = data;
    })  
  }

  

}
