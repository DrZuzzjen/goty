import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Game, VotoJuego } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private juegos:Game[] = [];

  constructor(private http: HttpClient) { }


  getNominados(){

    console.log(this.juegos.length);

    if (this.juegos.length > 0){
      return of (this.juegos)
    }else{

    return this.http.get<Game[]>(`${environment.url}/api/goty`)
    .pipe(
      tap( juegos => this.juegos = juegos)
    )
  }

  }
votarJuego (id: string){
  return this.http.post<VotoJuego>(`${environment.url}/api/goty/${id}`,{})
}


}

