import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

const Modules = [
MatToolbarModule,
MatButtonModule,
MatExpansionModule,
MatTooltipModule,
MatCardModule,
MatListModule,
MatInputModule,
MatIconModule,
MatTableModule,
]
@NgModule({
  imports:  [Modules],
  exports:  [Modules]

})
export class MaterialModule { }
