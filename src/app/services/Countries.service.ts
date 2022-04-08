import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of} from 'rxjs';
import { Interface } from '../Interface/Interface';
import { COUNTRIES } from '../data/countries';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  countries = COUNTRIES;
  selected:Interface | null = null;
  filtered : Interface[] = [];
  filteredByContinent: Interface[]= [];

  constructor(private router: Router) { }

  getCountries(name: string): Observable<any[]>{
    if (name.trim() == ''){
      return of (this.countries);
    }
    else{
    this.filtered = this.countries.filter((pays) => {
      return pays?.name?.common?.toLowerCase().includes(name.toLowerCase());
    });
    return of (this.filtered);
    }
  }

  parContinent(continent: string): Observable<any[]>{
    this.countries = COUNTRIES;
    this.router.navigate(['/pays', continent]);
    this.filteredByContinent = this.countries.filter((country)=>{
      return country.region?.toLowerCase() === continent.toLowerCase();
    })
    this.countries = this.filteredByContinent;
    return of (this.countries);
  }

  setCountry(country : Interface){
    this.selected = country;
  }

  getCountry(){
    return this.selected;
  }
}
