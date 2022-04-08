import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountriesService } from 'src/app/services/Countries.service';
import { Interface } from '../../Interface/Interface';

@Component({
  selector: 'app-Card',
  templateUrl: './Card.component.html',
  styleUrls: ['./Card.component.css']
})
export class CardComponent implements OnInit {

  @Input() country: Interface | undefined;

  constructor(private service: CountriesService, private router: Router) { }

  ngOnInit(): void {}

  goToDetails(){
    if (this.country){
      this.router.navigate(['/pays/details',  this.country?.name?.common]);
      this.service.setCountry(this.country);
    }
  }
}
