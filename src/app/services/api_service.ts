import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { films } from '../models/film.model';
//apres les importation on met le injectable il est la qque pour les services

@Injectable()

export class ApiService {

    constructor(private client : HttpClient){}

//on cree une medole qui est  cette fonction


    url = 'https://swapi.dev/api/films/'
// apres import l'api va creer une promesse
     async callApi() : Promise<films>{  // pour nous retourner une pomesse

        return new Promise((resolve, reject)=>{
            this.client.get(this.url + "1/").subscribe((data :any) =>{
                console.log(data);
                // console.log(resolve)
            })

 
        })
     }


    

}