import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'


@Component({ // decorator
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 // hero='Windstorm'; //property  wordt gerefactored naar model van de interface
  hero: Hero= { // en hero wordt getypeerd gevormd naar het model van de interface
    id: 1,
    name: 'Windstorm'
  }

  constructor() { }

  ngOnInit(): void { // lifecycle hook
  }

}
