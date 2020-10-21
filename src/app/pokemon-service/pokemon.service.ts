import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { IPokemon } from '../pokemon-list/pokemon';
import { IPokemonList } from '../pokemon-list/pokemon-list';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    //private url = 'https://pokeapi.co/api/v2/'
    private url = 'app/pokemon.json'

    constructor(private http: HttpClient) { }

    getPokemon(pokemon: object): Observable<IPokemon[]> {
        return this.http.get<IPokemon[]>(`${this.url}`);
    }

    getIndigoPokemonList(): Observable<any> {
        //return this.http.get<any>(this.url)
        return this.http.get<any>(this.url,{
            headers: new HttpHeaders({
                'Accept': 'application/json'
            })}).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))));
    }

}