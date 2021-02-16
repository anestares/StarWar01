import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  films: Observable<any>;
  //constructor(private navController: NavController, private router: Router) { }
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.films = this.http.get('https://swapi.dev/api/films');
    //this.films.subscribe(data => {
     //console.log('my data: ', data);
    //});
  }
  openDetails(film) {
    let split = film.url.split('/');
    let filmId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/films/${filmId}`);
  }  
}
