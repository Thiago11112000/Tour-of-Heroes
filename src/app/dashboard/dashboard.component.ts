import { Hero } from '../core/models/hero.model';
import { HeroService } from '../core/services/hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  heroes:Hero[]=[];
  constructor(private heroService: HeroService){

  }
  ngOnInit():void{
 this.getHeroes();
  }
  getHeroes(): void{
 this.heroService.
 getHeroes().
 subscribe(heroes => this.heroes = heroes.slice(1, 5))

  }
}
