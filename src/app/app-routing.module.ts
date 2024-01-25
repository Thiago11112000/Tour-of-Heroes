import { HeroesComponent } from './heroes/components/heroes/heroes.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
{path: '', redirectTo: "/dashboard",pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
