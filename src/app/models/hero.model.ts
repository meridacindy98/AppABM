export class HeroModel {
    id: string;
    name: string;
    power: string;
    live: boolean;

    constructor(){
        this.live = true;
    }
}