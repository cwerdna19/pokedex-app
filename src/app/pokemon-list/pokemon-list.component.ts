import { Component, OnInit } from '@angular/core';

import { IPokemon } from './pokemon';
import { PokemonService } from '../pokemon-service/pokemon.service';

declare var $: any;

@Component({
  selector: 'pkmn-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  imageWidth: number = 75;
  imageMargin: number = 2;
  tableRowPadding: number = 0;
  
  pokemon: IPokemon[];
  pokemonList = [];
  pokemonClicked: any;

  constructor(private pokemonService: PokemonService) { }

  onPokemonClick(value: any) {
    this.pokemonClicked = value;
    console.log(`We just clicked ${value.name}!`);
  }

  ngOnInit(): void {
    this.pokemonService.getIndigoPokemonList().subscribe({
      next: data => {
        this.pokemonList.push(data);
      },  
      error: (err: any) => {
        console.log(err);
      }
    });
    $('body').append($('#pokemonDetail'));
  }

}