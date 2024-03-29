import { MaterialModule } from './../material/material.module';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterLink } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found.component';


const COMPONENTS = [
  PageNotFoundComponent,
  MessagesComponent,
  ToolbarComponent
]
const MODULES = [FlexLayoutModule,MaterialModule,RouterLink]


@NgModule({
  declarations: [COMPONENTS],

  imports: [CommonModule,MODULES],
  exports: [COMPONENTS,MODULES]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf()  parentModule?: CoreModule){
    if(parentModule){
      throw new Error('CoreModule has already been loaded Import this module in the app module ')
    }
  }
 }
