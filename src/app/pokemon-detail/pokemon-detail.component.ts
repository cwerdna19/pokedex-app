import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pkmn-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  @Input() pokemonShown: any = {name: 'pokemonShown'};
  imageWidth: number = 300;
  pokemonTypes: any;

  constructor() { }

  ngOnInit(): void {
  //   let startTypes = this.pokemonShown?.types;
  //   let finalTypes = [];
  //   //let types = [];
  //   if (startTypes?.length() > 1) {
  //     for (let t of startTypes) {
  //       t?.type.name.push(finalTypes);
  //     }
  //     this.pokemonTypes = finalTypes.join(' / ');
  //   } else {
  //     this.pokemonTypes = startTypes?.type.name;
  //   }
  //   console.log(finalTypes)
  }

}
