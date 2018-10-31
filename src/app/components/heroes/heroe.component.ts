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
    };
    nuevo: boolean = false;
    id:string;
    constructor( private _heroesService: HeroesService,
                 private router: Router,
                 private _route: ActivatedRoute ) {

        this._route.params
            .subscribe( params => {
               this.id = params['id'];
               if(this.id !== "nuevo"){
                   this._heroesService.getHeroe(this.id)
                       .subscribe( params => this.heroe = params);
               }

            });
    }

    ngOnInit() {
    }

    guardar(){
        if( this.id === 'nuevo') {
            this._heroesService.nuevoHeroe( this.heroe )
                .subscribe( data => {
                        this.router.navigate(['/heroe', data.name]);
                    },
                    error => console.error(error));
        }else{
            this._heroesService.actualizarHeroe( this.heroe, this.id )
                .subscribe( data => {
                        console.log(data);
                    },
                    error => console.error(error));
        }
    }

    nuevoHeroe( forma: NgForm ){
        this.router.navigate(['/heroe','nuevo']);

        forma.reset({
            casa:"Marvel";
        });
    }

}
