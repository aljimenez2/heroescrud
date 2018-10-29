import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroeComponent} from './components/heroes/heroe.component';

// Routes
import {ROUTES} from './app.routes';

// Services
import { HeroesService } from "./services/heroes.service";
@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroeComponent
    ],
    imports: [
        BrowserModule,
        ROUTES,
        HttpModule,
        FormsModule,
    ],
    providers: [
        HeroesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
