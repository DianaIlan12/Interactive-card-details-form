import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IcdfComponent } from './icdf/icdf.component';
import { CardsComponent } from './icdf/cards/cards.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './icdf/form/form.component';

@NgModule({
  declarations: [AppComponent, IcdfComponent, CardsComponent, FormComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
