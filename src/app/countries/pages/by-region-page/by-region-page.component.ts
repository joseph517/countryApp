import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public regions:Country[] = []

  constructor(
    private regionService:CountriesService
  ){}

  searchByRegion(region:string){
    this.regionService.searchRegion(region)
      .subscribe((regions:Country[])=>{
        this.regions = regions
      })
  }
}
