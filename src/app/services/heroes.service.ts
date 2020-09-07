import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroModel } from '../models/hero.model';
import { map, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = "https://appabm-26057.firebaseio.com";

  constructor( private http: HttpClient ) { }

  createHero( hero: HeroModel ){
    return this.http.post( this.url + "/Heroes.json", hero ).pipe(
      map( (resp: any) => {
        hero.id = resp.name;
        return hero;
      } )
    );
  }

  updateHero( hero: HeroModel){
    const HEROTEMP = {
      ...hero
    };
    delete HEROTEMP.id;
    return this.http.put( this.url + "/Heroes/" + hero.id + ".json", HEROTEMP  )
  }

  getHeroes(){
    return this.http.get( this.url + "/Heroes.json" ).pipe( map( this.createArrayHeroes ), delay(900) );
  }

  getHeroById( heroId: string ){
    return this.http.get( this.url + "/Heroes/" + heroId + ".json" );
  }

  deleteHero ( heroId: string ){
    return this.http.delete( this.url + "/Heroes/" + heroId + ".json" );
  }


  private createArrayHeroes( heroesObj: object ){

    const HEROES: HeroModel[] = [];

    if ( heroesObj === null ) return [];

    Object.keys( heroesObj ).forEach( key => {
        
      const HERO: HeroModel = heroesObj[key];
      HERO.id = key;
      HEROES.push(HERO);

    });

    return HEROES;
  }
}
