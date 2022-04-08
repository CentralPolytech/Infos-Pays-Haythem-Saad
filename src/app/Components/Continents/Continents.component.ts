import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/Countries.service';

@Component({
  selector: 'app-Continents',
  templateUrl: './Continents.component.html',
  styleUrls: ['./Continents.component.css']
})
export class ContinentsComponent implements OnInit {

  continent: string= '';
  constructor(private service: CountriesService){}

  Afrique(){
    this.continent = 'Africa'
    this.service.parContinent(this.continent);
  }
  Amerique(){
    this.continent = 'Americas'
    this.service.parContinent(this.continent);

  }
  Asie(){
    this.continent = 'Asia'
    this.service.parContinent(this.continent);
  }
  Europe(){
    this.continent = 'Europe'
    this.service.parContinent(this.continent);
  }
  Australia(){
    this.continent = 'Oceania'
    this.service.parContinent(this.continent);
  }

  ngOnInit(): void {}
}
