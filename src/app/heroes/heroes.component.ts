import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({ // decorator
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 // hero='Windstorm'; //property  wordt gerefactored naar model van de interface
  /* hero: Hero= { // en hero wordt getypeerd gevormd naar het model van de interface
    id: 1,
    name: 'Windstorm'
  } */
 heroes = HEROES; // nu wordt ipv één zoals hierboven een hele lijst geïmporteerd van mock-heroes - een array met objecten in


  constructor() { }

  ngOnInit(): void { // lifecycle hook
  }

}
