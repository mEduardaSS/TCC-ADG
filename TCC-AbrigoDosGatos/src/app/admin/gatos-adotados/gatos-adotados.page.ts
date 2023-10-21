import { Component, OnInit } from '@angular/core';
import { FormGatoService } from 'src/app/services/formGato/form-gato.service';

@Component({
  selector: 'app-gatos-adotados',
  templateUrl: './gatos-adotados.page.html',
  styleUrls: ['./gatos-adotados.page.scss'],
})
export class GatosAdotadosPage implements OnInit {

  constructor(private FormGatoService:FormGatoService) { }

  ngOnInit() {
    this.listDadosGato();
  }
  upload: any = 'http://aula/API/dadosGato/';
  gatosExibidos: any = [];
  listDadosGato(){
    this.FormGatoService.selectAdotados().subscribe((dadosGato:any) => {
      this.gatosExibidos = dadosGato.message;
      console.log(this.gatosExibidos);
    })
  }

}
