import { environment } from 'src/environments/environment';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controle-voluntarios',
  templateUrl: './controle-voluntarios.page.html',
  styleUrls: ['./controle-voluntarios.page.scss'],
})
export class ControleVoluntariosPage implements OnInit {
  private readonly API = environment.baseApiUrl;

  listagemVoluntarios: any[] = [];
  constructor() { }

  async ngOnInit(){
    this.listagemVoluntarios = await this.get();
    console.log( this.get());
  }

  async get(){
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    
    return await fetch(this.API+`dadosVoluntario/getVoluntarioAprovado.php`, options)
    .then(async res => {
      return await res.json() ;
    })
    .catch(err => {
      console.log(err.json()) ;
    })
  }
}
