import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountriesService } from 'src/app/services/Countries.service';
import { Interface } from '../../Interface/Interface';

@Component({
  selector: 'app-Liste',
  templateUrl: './Liste.component.html',
  styleUrls: ['./Liste.component.css']
})
export class ListeComponent implements OnInit {
  mot: string = '';
  countries$ : Observable<Array<Interface>> | undefined

  constructor(private service : CountriesService) { }

  ngOnInit(): void {
    this.countries$ = this.service.getCountries(this.mot);
  }

  recherche(){
    this.countries$ = this.service.getCountries(this.mot);
  }
}
