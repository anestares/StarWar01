import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {
  ionicForm: FormGroup;
  planets: Observable<any>;
  idPlaneta: number;

  
  isSubmitted = false;
  isdni: boolean;
  fecha_actual= Date.now();

  constructor(private router: Router, private api: ApiService, public formBuilder: FormBuilder) { }

  ngOnInit() {
    //this.planets = this.api.getPlanets();
    this.ionicForm = this.formBuilder.group({
      nombre: [''],
      rotation_period: ['', []],
      orbital_period: [],
      diameter: ['', []]
    });
  }

  openDetails(planet){
    let split = planet.url.split('/');
    let planetId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/planets/${planetId}`);
  }

  getFilmData(id){
    this.api.getFilm(id).subscribe(res=>{
      this.ionicForm.setValue({
        nombre: res['title'],
        rotation_period: res['episode_id'],
        orbital_period: res['director'],
        diameter: res['producer']
      });
    });
  }
  getPeopleData(id){
    this.api.getPeople(id).subscribe(res=>{
      this.ionicForm.setValue({
        nombre: res['name'],
        rotation_period: res['height'],
        orbital_period: res['mass'],
        diameter: res['hair_color']
      });
    });
  }
  getPlanetData(id){
    this.api.getPlanet(id).subscribe(res=>{
      this.ionicForm.setValue({
        nombre: res['name'],
        rotation_period: res['rotation_period'],
        orbital_period: res['orbital_period'],
        diameter: res['diameter']
      });
    });
  }

  updateestadodni(){
    console.log('nuevo estado: ' + this.isdni); 
  }

}
