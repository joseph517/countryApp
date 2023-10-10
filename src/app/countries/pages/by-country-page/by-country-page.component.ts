import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {
  public countries:Country[] = []
  public isLoading:boolean = false
  public initialValue:string = ''

  constructor(
    private countryService: CountriesService
  ){}

  ngOnInit(){
    this.countries = this.countryService.cacheStore.byCountry.countries
    this.initialValue = this.countryService.cacheStore.byCountry.term

  }

  searchByCountry(country:string){
    this.isLoading = true
    this.countryService.searchCountry(country)
      .subscribe((countries:Country[])=>{
        this.countries = countries
        this.isLoading = false
      })
  }

}
