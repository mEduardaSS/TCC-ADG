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

  listagemVoluntarios: any = [];
  
  voluntarioSelecionado:any = [];

  constructor(private FormVoluntarioService:FormVoluntarioService, private Router:Router) {
    this.voluntarioSelecionado = this.FormVoluntarioService.voluntarioSelecionado;
   }

  async ngOnInit(){
    // this.listagemVoluntarios = await this.get();
    // console.log( this.get());
     this.listDadosVoluntarios();
     console.log(this.voluntarioSelecionado);
  }

  ionViewDidEnter(){
    this.listDadosVoluntarios();
  }

  
  indiceDel: any;
  apagar(indice: any) {
    this.FormVoluntarioService.delete(indice).subscribe();
    // console.log(indice);
  }

  voluntariosExibidos: any = [];
  
  listDadosVoluntarios(){
    this.FormVoluntarioService.selectAprovados().subscribe((dadosVoluntario:any) => {
      if(dadosVoluntario.success == 1){
        this.voluntariosExibidos = dadosVoluntario.message;
        console.log(this.voluntariosExibidos);
        return;
      }
      console.log(this.voluntariosExibidos);
      this.voluntariosExibidos = [];
    })
  }

  analisar_voluntario(id:any){
    this.FormVoluntarioService.voluntarioSelecionado = this.voluntariosExibidos.find((voluntario:any)=> voluntario.idVoluntario == id);
    this.Router.navigate(['/admin/analise-voluntario'])
  }

  analisar_controleVoluntario(id:any){
    this.FormVoluntarioService.voluntarioSelecionado = this.voluntariosExibidos.find((voluntario:any)=> voluntario.idVoluntario == id);
    this.Router.navigate(['/analise-controle-voluntarios'])
  }
  // async get(){
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }
    
  //   return await fetch(this.API+`dadosVoluntario/getVoluntarioAprovado.php`, options)
  //   .then(async res => {  
  //     return await res.json() ;
  //   })
  //   .catch(err => {
  //     console.log(err.json()) ;
  //   })
  // }
}
