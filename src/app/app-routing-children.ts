import { Routes } from '@angular/router';
import { FormHeroTemplateComponent } from './pages/form-hero-template/form-hero-template.component';
import { FormHeroReactiveComponent } from './pages/form-hero-reactive/form-hero-reactive.component';

export const ROUTES_CHILDREN: Routes = [   

    { path: 'formTemplate', component: FormHeroTemplateComponent },
    { path: 'formReactive', component: FormHeroReactiveComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'formTemplate' },
    { path: '', pathMatch: 'full', redirectTo: 'formTemplate' },   

];
