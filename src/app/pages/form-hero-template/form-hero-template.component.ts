import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroModel } from '../../models/hero.model';
import { HeroesService } from '../../services/heroes.service';

import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-hero-template',
  templateUrl: './form-hero-template.component.html',
  styleUrls: ['./form-hero-template.component.css']
})
export class FormHeroTemplateComponent implements OnInit {

  hero = new HeroModel();
  heroId: string;

  constructor( private heroesService: HeroesService, private activateRouter: ActivatedRoute, private router: Router) {
    this.heroId = this.activateRouter.parent.snapshot.paramMap.get('id');    

    if ( this.heroId != 'new' ){
      heroesService.getHeroById( this.heroId ).subscribe( (heroResp: HeroModel) => {
        this.hero = heroResp;
        this.hero.id = this.heroId;
      });   
    }     

  }

  ngOnInit(): void {}

  save( form: NgForm ){

    if ( form.invalid ){
      console.log("Formulario invalido");
      return;
    }

    console.log(form);
    console.log(this.hero);

    Swal.fire({
      icon: 'info',
      title: 'Espere',
      text: 'Guardando información...',
      allowOutsideClick: false
    });

    Swal.showLoading();

    let petition: Observable<any>;
    let createHero: boolean = false;

    if ( this.hero.id  ){
      petition = this.heroesService.updateHero(this.hero);      
    }else{
      petition = this.heroesService.createHero(this.hero);
      createHero = true;
    }

    petition.subscribe( resp => {
      
      Swal.fire({
        icon: 'success',
        title: this.hero.name,
        text: createHero ? 'La informacion se guardo con exito!' : 'La informacion se actualizo con exito!'
      }).then( result => {
        if( result.value ){
          this.router.navigateByUrl('/heros');
        }        
      });      

    }, error => {

      Swal.fire({
        icon: 'error',
        text: error.message
      });  
      
    });   
        
  }

}
