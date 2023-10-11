import { Component, OnInit } from '@angular/core';
import { FormAdocaoService } from '../../services/formAdocao/form-adocao.service';
import { FormGatoService } from '../../services/formGato/form-gato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.page.html',
  styleUrls: ['./home-admin.page.scss'],
})

export class HomeAdminPage implements OnInit {

  constructor(private FormAdocaoService:FormAdocaoService, private router: Router, private FormGatoService:FormGatoService ) { }

  ngOnInit() {
    this.listDadosTutor();
    this.listDadosGato();
  }

  tutoresExibidos: any = [];
  listDadosTutor(){
    this.FormAdocaoService.select().subscribe((dadosTutor:any) => {
      this.tutoresExibidos = dadosTutor.message;
      console.log(this.tutoresExibidos);
    })
  }

  gatosExibidos: any = [];
  listDadosGato(){
    this.FormGatoService.select().subscribe((dadosGato:any) => {
      this.gatosExibidos = dadosGato.message;
      console.log(this.gatosExibidos);
    })
  }

  analisar_tutor(id:any){
    this.FormAdocaoService.tutorSelecionado = this.tutoresExibidos.find((tutor:any)=> tutor.idAdocao == id);
    this.router.navigate(['/analise-adocao'])
  }

}
