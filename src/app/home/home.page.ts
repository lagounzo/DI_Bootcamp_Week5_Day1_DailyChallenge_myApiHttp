import { Component,OnInit } from '@angular/core';
import { initialize } from '@ionic/core';
import { films } from '../models/film.model';
// importer ApiService
import { ApiService } from '../services/api_service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  // injecter l'api dans le constructeur
  constructor( private api : ApiService) {}
  //pour initialiset la fonction
  ngOnInit(): void {
    
    this.api.callApi().then((data : any)=>{
      this.films = (data)
    })
  }

  films!  : films;

  // ngOInit() : void {
  // }

}
