import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormHeroTemplateComponent } from './pages/form-hero-template/form-hero-template.component';
import { FormHeroReactiveComponent } from './pages/form-hero-reactive/form-hero-reactive.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { FormHeroComponent } from './pages/form-hero/form-hero.component';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormHeroTemplateComponent,
    FormHeroReactiveComponent,
    HeroesComponent,
    FormHeroComponent        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
