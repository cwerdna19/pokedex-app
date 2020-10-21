import { Component, OnInit } from '@angular/core';

import { IPokemon } from './pokemon';
import { IPokemonList } from './pokemon-list';
import { PokemonService } from '../pokemon-service/pokemon.service';

@Component({
  selector: 'pkmn-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  imageWidth: number = 50;
  imageMargin: number = 2;
  tableRowPadding: number = 0;
  
  pokemon: IPokemon[];
  pokemonList;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getIndigoPokemonList()
      .subscribe(
        (data: IPokemonList[] ) => this.pokemonList = data,
        (err: any) => console.log(err),
        () => console.log(this.pokemonList)
      );
  }

}
