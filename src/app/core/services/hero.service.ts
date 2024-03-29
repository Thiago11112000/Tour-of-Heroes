import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes'
import { Hero } from '../models/hero.model';
import { Observable, of, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
constructor(private messageService: MessageService){


}
  getHeroes(): Observable<Hero[]> {
      const heroes = of(HEROES);

     // return throwError(new Error('ocorreu um problema'));

     this.messageService.add('HeroService: fetched heroes ');
      return heroes;
  }
  getHero(id:number):Observable<Hero>{
 const hero =  HEROES.find((hero)=> hero.id === id)!;
 this.messageService.add(`HeroService: fetched hero  id= ${id}`)
 return of(hero);
  }
}
