import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

type Regions = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania'

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public regionsOptions: Regions[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  public regions:Country[] = []
  public isLoading:boolean = false
  public selectRegion?:Regions

  constructor(
    private regionService:CountriesService
  ){}

  searchByRegion(region:Regions){
    this.selectRegion=region
    this.isLoading = true
    this.regionService.searchRegion(region)
      .subscribe((regions:Country[])=>{
        this.regions = regions
        this.isLoading = false
      })
  }
}
