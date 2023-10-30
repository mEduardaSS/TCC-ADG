import { environment } from 'src/environments/environment';

import { Component, OnInit } from '@angular/core';
import { FormGatoService } from 'src/app/services/formGato/form-gato.service';

@Component({
  selector: 'app-gatos-adotados',
  templateUrl: './gatos-adotados.page.html',
  styleUrls: ['./gatos-adotados.page.scss'],
})
export class GatosAdotadosPage implements OnInit {
  private readonly API = environment.baseApiUrl;

  constructor(private FormGatoService:FormGatoService) { }

  ngOnInit() {
    this.listDadosGato();
  }
  upload: any = this.API+'/dadosGato/';
  gatosExibidos: any = [];
  listDadosGato(){
    this.FormGatoService.selectAdotados().subscribe((dadosGato:any) => {
      this.gatosExibidos = dadosGato.message;
      console.log(this.gatosExibidos);
    })
  }

}
