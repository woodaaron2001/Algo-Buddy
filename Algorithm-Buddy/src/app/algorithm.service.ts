import { Injectable } from '@angular/core';
import { algorithm } from './algorithm';
import { ALGORITHMS,CATEGORIES, MOVESET } from './mock-algorithms';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmService {

  constructor(private http: HttpClient) { }

  getAlgorithm(id: number): Observable<algorithm>{
    let url = "https://rest-api-z7cayewqka-uc.a.run.app/v1/algorithm/JPerm"
    return this.http.get<algorithm>(url);
  }

  getAlgorithmByName(name: string): Observable<algorithm>{
    let url = "https://rest-api-z7cayewqka-uc.a.run.app/v1/algorithm/"+name
    return this.http.get<algorithm>(url);
  }

  getAlgorithmsByCategory(category: string): Observable<algorithm[]>{
    let url = "https://rest-api-z7cayewqka-uc.a.run.app/v1/algorithmCategory/"+category
    return this.http.get<algorithm[]>(url).pipe(map(events => events.sort((a: algorithm, b: algorithm) =>
    a.Id - b.Id)))
  }

  getRandomPLL(): Observable<algorithm>{
    let url = "https://rest-api-z7cayewqka-uc.a.run.app/v1/randomPLL/"
    return this.http.get<algorithm>(url);
  }

  getRandomOLL(): Observable<algorithm>{
    let url = "https://rest-api-z7cayewqka-uc.a.run.app/v1/randomOLL/"
    return this.http.get<algorithm>(url);
  }

  getScramble(): Observable<string>{
    var scramble = '';
    const moveset = MOVESET;
    for(var i =0; i < 10 ;i++ ){
      scramble += moveset.charAt(Math.floor(Math.random() * moveset.length));
      if(Math.random() > 0.75){
        scramble += "'";
      }
      else if( Math.random() > 0.75){
        scramble += '2';
      }
      scramble += " ";
    }
    return of(scramble);
  }
}
