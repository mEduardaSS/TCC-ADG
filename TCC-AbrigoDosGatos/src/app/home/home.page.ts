import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGatoService } from '../services/formGato/form-gato.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private router: Router, private FormGatoService:FormGatoService) {}

  ngOnInit() {
    this.listDadosGato();
  }

  gatosExibidos: any = [];
  listDadosGato(){
    this.FormGatoService.select().subscribe((dadosGato:any) => {
      this.gatosExibidos = dadosGato.message;
      console.log(this.gatosExibidos);
    })
  }
}
