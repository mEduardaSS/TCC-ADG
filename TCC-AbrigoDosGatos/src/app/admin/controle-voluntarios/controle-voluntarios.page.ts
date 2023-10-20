import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controle-voluntarios',
  templateUrl: './controle-voluntarios.page.html',
  styleUrls: ['./controle-voluntarios.page.scss'],
})
export class ControleVoluntariosPage implements OnInit {

  constructor() { }

  async ngOnInit() {
    console.log( this.listarVoluntarios());
  }

  async listarVoluntarios(){
     return await this.get()
  }
  async get(){
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    
    return await fetch(`http://casa/server/api/listar`, options)
    .then(async res => {
      return  await res.json() ;
    })
    .catch(err => {
      console.log(err.json()) ;
    })
  }
}
