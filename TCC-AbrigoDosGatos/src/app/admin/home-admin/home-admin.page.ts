// import do arquivo environments
import { environment } from 'src/environments/environment';

import { Component, OnInit } from '@angular/core';
import { FormAdocaoService } from '../../services/formAdocao/form-adocao.service';
import { FormGatoService } from '../../services/formGato/form-gato.service';
import { FormVoluntarioService } from '../../services/formVoluntario/form-voluntario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.page.html',
  styleUrls: ['./home-admin.page.scss'],
})

export class HomeAdminPage implements OnInit {
  // Aqui, foi pego a url definida no arquivo environments.ts
  private readonly API = environment.baseApiUrl;

  compartilhaIdVoluntario: any;
  
  constructor(private FormAdocaoService:FormAdocaoService, private router: Router, 
    private FormGatoService:FormGatoService, private formVoluntarioService:FormVoluntarioService ) {}

  // listagemVoluntarios: any[] = [];


  async ngOnInit() {
    // this.listagemVoluntarios = await this.get();
    // console.log(this.listagemVoluntarios);
  }

  ionViewDidEnter(){
    this.listDadosTutor();
    this.listDadosGato();
    this.listDadosVoluntarios();
  }

  tutoresExibidos: any = [];
  listDadosTutor(){
    this.FormAdocaoService.select().subscribe((dadosTutor:any) => {
      if(dadosTutor.success == 1){
        this.tutoresExibidos = dadosTutor.message;
        console.log(this.tutoresExibidos);
        return;
      }
      console.log(this.tutoresExibidos);
      this.tutoresExibidos = [];
    })
  }

  gatosExibidos: any = [];
  upload: any = this.API+'dadosGato/';
  listDadosGato(){
    this.FormGatoService.select().subscribe((dadosGato:any) => {
      if(dadosGato.success == 1){
        this.gatosExibidos = dadosGato.message;
        console.log(this.gatosExibidos);
        return;
      }
      console.log(this.gatosExibidos)
      this.gatosExibidos = [];
    })
  }

   voluntariosExibidos: any = [];
  listDadosVoluntarios(){
    this.formVoluntarioService.select().subscribe((dadosVoluntario:any) => {
      if(dadosVoluntario.success == 1){
        this.voluntariosExibidos = dadosVoluntario.message;
        console.log(this. voluntariosExibidos);
        return;
      }
      console.log(this. voluntariosExibidos);
      this.voluntariosExibidos = [];
    })
  }

  analisar_gato(id:any){
    console.log(id);
    this.FormGatoService.gatoSelecionado = this.gatosExibidos.find((gato:any)=> gato.idGato == id);
    this.router.navigate(['/editar-gato'])
  }

  analisar_tutor(id:any){
    this.FormAdocaoService.tutorSelecionado = this.tutoresExibidos.find((tutor:any)=> tutor.idAdocao == id);
    this.router.navigate(['/analise-adocao'])
  }

  analisar_voluntario(id:any){
    this.formVoluntarioService.voluntarioSelecionado = this.voluntariosExibidos.find((voluntario:any)=> voluntario.idVoluntario == id);
    this.router.navigate(['/admin/analise-voluntario'])
  }

  

  segmentModel = 'tutor'; // Valor inicial do ion-segment

  segmentChanged() {
    // Função acionada quando a seleção do ion-segment muda
    console.log('Opção selecionada:', this.segmentModel);

    // Aqui você pode realizar ações específicas com base na opção selecionada, se necessário
  }
 

  // async get(){
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }

  //   }
    
    
  //   return await fetch(this.API+`dadosVoluntario/listarInteresseVoluntario.php`, options)
  //   .then(async res => {
  //     return await res.json() ;
  //   })
  //   .catch(err => {
  //     console.log(err.json()) ;
  //   })
  // }
  // analisarVoluntario(id:any){
  //   this.compartilhaIdVoluntario.idVoluntario = id

  // }
}
