import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { HeroesRoutingModule } from './components/heroes/heroes-routing.module';



@NgModule({
  declarations: [HeroesComponent, HeroDetailComponent],
  imports: [
CommonModule,  MaterialModule,  FormsModule,HeroesRoutingModule
  ]
})
export class HeroesModule { }
