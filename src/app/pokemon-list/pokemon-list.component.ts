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
  imageWidth: number = 75;
  imageMargin: number = 2;
  tableRowPadding: number = 0;
  
  pokemon: IPokemon[];
  pokemonList = [];

  constructor(private pokemonService: PokemonService) { }

  clickedTest(): void {
      console.log(this.pokemonList[0].sprites.other['official-artwork'].front_default)
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
  }

}