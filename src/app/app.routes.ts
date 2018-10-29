import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroeComponent} from './components/heroes/heroe.component';

const app_routes: Routes = [
    {path: 'heroes', component: HeroesComponent},
    {path: 'heroe/:id', component: HeroeComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'heroes'}
];

export const ROUTES = RouterModule.forRoot(app_routes);