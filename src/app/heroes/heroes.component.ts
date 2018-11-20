import { Component, OnInit } from '@angular/core';
import { Hero } from '../app.hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //When Angular creates a HeroesComponent, 
  //the Dependency Injection system sets the heroService parameter to the singleton instance of HeroService.
  constructor(private heroService: HeroService) { }

  ngOnInit() { //invece di chiamare getHeroes nel costruttore, lo chiamo in questo metodo, che inizializza il component ottenendo gli eroi attraverso il service
    this.getHeroes();
  }

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  // heroes = HEROES; Prende il mock dove è stato definito un array statico di eroi
  
  heroes: Hero[]; //utilizza un service. 
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  //metodo sincrono, non funziona con server
  // getHeroes(): void { //inizialmente il vettore è vuoto, poi utilizza il service per prendere i dati
  //   this.heroes = this.heroService.getHeroes();
  // }

  //metodo asincrono, funziona con server
  getHeroes(): void { 
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => { //When addHero saves successfully, the subscribe callback receives the new hero and pushes it into to the heroes list for display.
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
  


}
