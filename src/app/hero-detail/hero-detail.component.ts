import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../app.hero';
import { HeroService }  from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})


export class HeroDetailComponent implements OnInit {

  constructor(  
    private route: ActivatedRoute, // This component is interested in the route's bag of parameters extracted from the URL
    private heroService: HeroService, //gets hero data from the remote server and this component will use it to get the hero-to-display
    private location: Location) { 
  }

  
  ngOnInit() {
    this.getHero();
  }

  //Prende in input hero dal master
  @Input() hero: Hero; 

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
