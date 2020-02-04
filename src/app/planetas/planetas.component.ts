import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit {

  idPelicula;
  planetas  = [];
  

  

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
      this.planetas = data["planets"];
      

    })
 

 
  }

}
