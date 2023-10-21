import { environment } from 'src/environments/environment';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voluntario',
  templateUrl: './voluntario.page.html',
  styleUrls: ['./voluntario.page.scss'],
})

export class VoluntarioPage implements OnInit {
  private readonly API = environment.baseApiUrl;

  nomeVoluntario: any = "";
  telefoneVoluntario: any = "";
  emailVoluntario: any = "";
  dataNascVoluntario: any = "";
  disponibilidade: any = "";

  constructor() { }

  ngOnInit() {
    
  }
  async insereVoluntario(){
    let dados:any ={
        "nomeVoluntario": `${this.nomeVoluntario}`,
        "telefoneVoluntario": `${this.telefoneVoluntario}`,
        "emailVoluntario": `${this.emailVoluntario}`,
        "dataNascVoluntario": `${this.dataNascVoluntario}`,
        "disponibilidade": `${this.disponibilidade}`,
      }
      console.log(dados);
      await this.post(dados);
      alert("Solicitação de voluntario enviada com sucesso");


      
  }
  async post(dados:any){
    const options = {
      method: 'POST',
      body: JSON.stringify(dados),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return fetch(this.API+`adicionar`, options)

    .then(res => {
      return res.json() ;
    })
    .catch(err => {
      console.log(err.json()) ;
    })
  }
}



