import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeroDetailComponent } from 'src/app/hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes.component';

export const routes: Routes = [
  {path: '',component: HeroesComponent},
  {path: ':id', component: HeroDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class HeroesRoutingModule { }
