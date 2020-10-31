import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pkmn-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  @Input() pokemonShown: any = 'pokemonShown';

  constructor() { }

  ngOnInit(): void {
  }

}
