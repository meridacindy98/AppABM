import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HeroModel } from '../../models/hero.model';
import { Observable } from 'rxjs';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-hero-reactive',
  templateUrl: './form-hero-reactive.component.html',
  styleUrls: ['./form-hero-reactive.component.css']
})
export class FormHeroReactiveComponent implements OnInit {

  heroId: string;
  hero = new HeroModel();
  formHero: FormGroup;
  state = true;

  constructor( private heroesService: HeroesService, private activateRouter: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) {
    this.heroId = this.activateRouter.parent.snapshot.paramMap.get('id');    
    if ( this.heroId === 'new' ){
      this.heroId = '';
    }
    this.createForm();
    this.state = this.formHero.controls['state'].value
   }

  ngOnInit(): void {
  }

  createForm(){
    this.formHero = this.formBuilder.group({
      firebaseId: [this.heroId],
      name: [],
      power: [],
      state: [this.state]
    });
  }

  saveForm(){
    console.log('save');
    this.formHero.controls['state'].setValue(this.state);
    console.log(this.formHero);
    console.log(this.formHero.value);

    if ( this.formHero.invalid ){
      console.log("Formulario invalido");
      return;
    }

    Swal.fire({
      icon: 'info',
      title: 'Espere',
      text: 'Guardando información...',
      allowOutsideClick: false
    });

    Swal.showLoading();

    let petition: Observable<any>;
    let createHero: boolean = false;

    if ( this.formHero.controls['firebaseId'].value !== '' ){
      petition = this.heroesService.updateHero(this.formHero.value);      
    }else{
      petition = this.heroesService.createHero(this.formHero.value);
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
