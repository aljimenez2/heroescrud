import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

import {Heroe} from "../../interfaces/heroe.interface";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    styles: []
})
export class HeroeComponent implements OnInit {
    heroe: Heroe = {
        nombre: '',
        bio: '',
        casa: 'Marvel'
    }

    constructor( private _heroesService: HeroesService,
                 private router: Router,
                 private _route: ActivatedRoute ) {
    }

    ngOnInit() {
    }

    guardar(){
        console.log(this.heroe);
        let key: string = this._route.params.value['id'];
        if( key === 'nuevo') {
            this._heroesService.nuevoHeroe( this.heroe )
                .subscribe( data => {
                        this.router.navigate(['/heroe', data.name]);
                    },
                    error => console.error(error));
        }else{
            this._heroesService.actualizarHeroe( this.heroe, key )
                .subscribe( data => {
                        console.log(data);
                    },
                    error => console.error(error));
        }
    }

}
