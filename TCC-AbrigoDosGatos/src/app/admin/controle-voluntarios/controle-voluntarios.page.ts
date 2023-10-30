import { environment } from 'src/environments/environment';
import { FormVoluntarioService } from 'src/app/services/formVoluntario/form-voluntario.service';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controle-voluntarios',
  templateUrl: './controle-voluntarios.page.html',
  styleUrls: ['./controle-voluntarios.page.scss'],
})
export class ControleVoluntariosPage implements OnInit {
  private readonly API = environment.baseApiUrl;

  listagemVoluntarios: any[] = [];
  constructor(private FormVoluntarioService:FormVoluntarioService) { }

  async ngOnInit(){
    this.listagemVoluntarios = await this.get();
    console.log( this.get());
    this.listDadosVoluntarios();
  }

  voluntariosExibidos: any = [];
  listDadosVoluntarios(){
    this.FormVoluntarioService.selectAprovados().subscribe((dadosVoluntario:any) => {
      if(dadosVoluntario.success == 1){
        this. voluntariosExibidos = dadosVoluntario.message;
        console.log(this. voluntariosExibidos);
        return;
      }
      console.log(this. voluntariosExibidos);
      this. voluntariosExibidos = [];
    })
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
