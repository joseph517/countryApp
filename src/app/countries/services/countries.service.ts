import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs'
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {
  private urlCapital:string = 'https://restcountries.com/v3.1/'
  private urlCountry:string = 'https://restcountries.com/v3.1/name/'
  private urlRegion:string = 'https://restcountries.com/v3.1/region/'
  constructor(private http: HttpClient) { }

  searchCapital(term:string):Observable<Country[]>{

    return this.http.get<Country[]>(`${this.urlCapital}/capital/${term}`)
      .pipe(
        catchError(()=>of([]))
      )
  }

  searchCountry(country:string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.urlCountry}${country}`)
      .pipe(
        catchError(()=>of([]))
      )
  }

  searchRegion(region:string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.urlRegion}${region}`)
      .pipe(
        catchError(()=>of([]))
      )
  }

}
