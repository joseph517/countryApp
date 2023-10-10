import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Regions } from '../../interfaces/region.type'



@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {

  public regionsOptions: Regions[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  public regions:Country[] = []
  public isLoading:boolean = false
  public selectRegion?:Regions

  constructor(
    private regionService:CountriesService
  ){}

  ngOnInit():void{
    this.selectRegion = this.regionService.cacheStore.byRegion.region
    this.regions = this.regionService.cacheStore.byRegion.countries
  }

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
