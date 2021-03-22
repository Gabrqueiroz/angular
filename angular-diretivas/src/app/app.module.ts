import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiretivaIfComponent } from './diretiva-if/diretiva-if.component';
import { ComponentComponent } from './component/component.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaIfComponent,
    ComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
