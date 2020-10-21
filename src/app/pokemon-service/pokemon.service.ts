import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { pluck, tap, map } from 'rxjs/operators';

import { IPokemon } from '../pokemon-list/pokemon';
import { IPokemonList } from '../pokemon-list/pokemon-list';

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
        return this.http.get<any>(`${this.url}/pokemon?limit=151`).pipe(
            pluck('results'),
            tap((data) => {
                    for (let x in data) {
                        console.log(data[x].url)
                    }
                }
            ),
            map((data) => {
                let urls = []
                for (let x in data) {
                    urls.push(data[x].url)
                }
                return urls
            })
        );
    }
}