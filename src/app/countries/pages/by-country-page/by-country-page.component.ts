import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {
  public countries:Country[] = []
  constructor(
    private countryService: CountriesService
  ){}

  searchByCountry(country:string){
    this.countryService.searchCountry(country)
      .subscribe((countries:Country[])=>{
        this.countries = countries
      })
  }

}
