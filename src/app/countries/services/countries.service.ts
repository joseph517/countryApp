import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {
  private urlCapital:string = 'https://restcountries.com/v3.1/'
  constructor(private http: HttpClient) { }

  searchCapital(term:string):Observable<Country[]>{

    console.log()

    return this.http.get<Country[]>(`${this.urlCapital}/capital/${term}`)
  }

}
