import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import { reducers } from './store/store';
import {TodoEffect} from './store/effect/todo.effect';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([TodoEffect]),
    StoreDevtoolsModule.instrument(
      {
        maxAge: 10
      }
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
