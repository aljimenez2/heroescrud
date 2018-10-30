import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  firebaseUrl = "https://heroesapp-4d907.firebaseio.com/heroes.json";
  firebaseHeroeUrl = "https://heroesapp-4d907.firebaseio.com/heroes/";
  constructor( private http:HttpClient ) { }

  nuevoHeroe( heroe:Heroe ){
      let body = JSON.stringify( heroe );
      let headers = new HttpHeaders({
        "Content-Type": "application/json"
      });

      return this.http.post( this.firebaseUrl, body, { headers }).pipe(
          map(res =>{
            return res;
          })
      );
  }

  actualizarHeroe(heroe: Heroe, key$: string ){
      let body = JSON.stringify( heroe );
      let headers = new HttpHeaders({
          "Content-Type": "application/json"
      });
      let _url = `${this.firebaseHeroeUrl}${key$}.json `;
      return this.http.put( _url, body, { headers }).pipe(
          map(res =>{
              return res;
          })
      );
  }

  getHeroe( key$:string ){
      let url = `${ this.heroeURL }/${key$}.json`;
      return this.https.get( url )
  }
}
