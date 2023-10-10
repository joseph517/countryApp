import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {
  public countries: Country[] = []
  public isLoading: boolean = false
  public initialValue:string = ''

  ngOnInit():void{
    this.countries = this.capitalService.cacheStore.byCapital.countries
    this.initialValue = this.capitalService.cacheStore.byCapital.term

  }

  constructor(
    private capitalService: CountriesService,
  ){}

  searchByCapital(term:string){
    this.isLoading = true
    this.capitalService.searchCapital(term)
      .subscribe( (countries: Country[]) => {
        this.countries = countries
        this.isLoading = false
      }

    )

  }

}
