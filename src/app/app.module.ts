import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FactsComponent } from './facts/facts.component';
import { FactComponent } from './fact/fact.component';

@NgModule({
  declarations: [
    AppComponent,
    FactsComponent,
    FactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
