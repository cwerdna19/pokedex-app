import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { pluck, tap, map, concatAll, concatMap } from 'rxjs/operators';

import { IPokemon } from '../pokemon-list/pokemon';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    private url = 'https://pokeapi.co/api/v2'
    //private url = 'api/pokemon/pokemon.json'

    constructor(private http: HttpClient) { }

    getPokemon(urls: any): Observable<any> {
        for (let x in urls) {
            return this.http.get<any>(x);
        }
    }

    getIndigoPokemonList(): Observable<any> {
        return this.http.get<any>(`${this.url}/pokemon?limit=893`).pipe(
            pluck('results'),
            map((data) => {
                let pokemonData = []
                for (let x of data) {
                    pokemonData.push(this.http.get(x.url))
                }
                return pokemonData
            }),
            concatAll(),
            concatMap(data => data)
        );
    }
}