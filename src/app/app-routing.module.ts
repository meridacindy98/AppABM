import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { FormHeroComponent } from './pages/form-hero/form-hero.component';
import { ROUTES_CHILDREN } from './app-routing-children';

const ROUTES: Routes = [   

  { path: 'heros', component: HeroesComponent },
  { path: 'formHero/:id', component: FormHeroComponent, children: ROUTES_CHILDREN },
  { path: '**', pathMatch: 'full', redirectTo: 'heros' },
  { path: '', pathMatch: 'full', redirectTo: 'heros' }

]

@NgModule({
  imports: [ RouterModule.forRoot( ROUTES ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
