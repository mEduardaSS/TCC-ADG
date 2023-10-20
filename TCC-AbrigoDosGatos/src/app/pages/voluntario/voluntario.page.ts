import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voluntario',
  templateUrl: './voluntario.page.html',
  styleUrls: ['./voluntario.page.scss'],
})

export class VoluntarioPage implements OnInit {
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

    return fetch(`http://casa/server/api/adicionar`, options)

    .then(res => {
      return res.json() ;
    })
    .catch(err => {
      console.log(err.json()) ;
    })
  }
}



