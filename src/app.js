import { NgModule }      from '@angular/core';
import { HttpModule }    from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent, SpellCardComponent }  from './components';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    SpellCardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
