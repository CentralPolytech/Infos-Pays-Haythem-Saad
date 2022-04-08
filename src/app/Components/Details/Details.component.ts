import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountriesService } from 'src/app/services/Countries.service';
import { Interface } from '../../Interface/Interface';

@Component({
  selector: 'app-Details',
  templateUrl: './Details.component.html',
  styleUrls: ['./Details.component.css']
})
export class DetailsComponent implements OnInit {

  country:Interface | null = null;

  languages:string = '';

  constructor(private service: CountriesService, private router:Router) { }

  ngOnInit(): void {
    this.country =this.service.getCountry();
    this.languages = Object.values({...this.country?.languages}).toString();
  }
  back(){
    this.router.navigate(['/pays']);
  }
}
