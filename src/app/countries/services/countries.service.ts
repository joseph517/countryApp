import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map, tap} from 'rxjs'
import { Country } from '../interfaces/country.interface';
import { CacherStore } from '../interfaces/cache-store.interface';
import { Regions } from '../interfaces/region.type';


@Injectable({providedIn: 'root'})
export class CountriesService {
  private apiUrl:string = 'https://restcountries.com/v3.1'

  public cacheStore: CacherStore = {
    byCapital:{term:'', countries:[]},
    byCountry:{term:'', countries:[]},
    byRegion:{region:'', countries:[]}
  }

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage()
   }

  private saveToLocalStorage(){
    localStorage.setItem('cacheStorage', JSON.stringify(this.cacheStore))

  }

  private loadFromLocalStorage(){
    if(!localStorage.getItem('cacheStorage')) return
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStorage')!)
  }

  searchCountryByAlphaCode(code:string):Observable<Country | null>{
    const url = `${this.apiUrl}/alpha/${code}`
    return this.http.get<Country[]>(url)
      .pipe(
        map(countries=> countries.length >0 ? countries[0]: null ),
        catchError(()=>of(null))
      )
  }

  getCountriesRequest(url:string):Observable<Country[]>{
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(()=>of([])),
      )
  }

  searchCapital(term:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${term}`
    return this.getCountriesRequest(url)
      .pipe(
        tap((countries: Country[]) => this.cacheStore.byCapital = {term, countries}),
        tap(() => this.saveToLocalStorage())
    )
  }

  searchCountry(country:string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${country}`
    return this.getCountriesRequest(url)
      .pipe(
        tap((countries: Country[]) => this.cacheStore.byCountry = {term:country, countries}),
        tap(() => this.saveToLocalStorage())

      )
  }

  searchRegion(region:Regions):Observable<Country[]>{
    const url = `${this.apiUrl}/region/${region}`
    return this.getCountriesRequest(url)
    .pipe(
      tap((countries: Country[]) => this.cacheStore.byRegion = {region, countries}  ),
      tap(() => this.saveToLocalStorage())

    )
  }

}
