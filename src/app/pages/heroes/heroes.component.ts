import { Component, OnInit } from '@angular/core';
import { HeroModel } from '../../models/hero.model';
import { HeroesService } from '../../services/heroes.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-heros',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroModel[] = [];
  loading = false;

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
    this.loading = true;
    this.heroesService.getHeroes().subscribe( listHeroes => {
      this.heroes = listHeroes;
      this.loading = false;
    } );
  }

  deleteHero( hero: HeroModel, index: number ){    

    Swal.fire({
      title: '¿Esta seguro?',  
      text: "Esta seguro que desea eliminar a " + hero.name,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {

        this.heroesService.deleteHero(hero.id).subscribe( resp => {
          this.heroes.splice(index, 1);
        } );

        Swal.fire(
          'Eliminado!',
          'El registro fue eliminado con exito.',
          'success'
        )
      }
    })      

  }

}
