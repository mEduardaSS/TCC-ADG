import { environment } from 'src/environments/environment';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGatoService } from '../services/formGato/form-gato.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private readonly API = environment.baseApiUrl;

  constructor( private router: Router, private FormGatoService:FormGatoService) {}

  ngOnInit() {
    this.listDadosGato();
  }

  gatosExibidos: any = [];
  upload: any = this.API+'/dadosGato/';
  listDadosGato(){
    this.FormGatoService.select().subscribe((dadosGato:any) => {
      this.gatosExibidos = dadosGato.message;
      console.log(this.gatosExibidos);
    })
  }

    selecionarGato(id:any){
    this.FormGatoService.gatoSelecionado = this.gatosExibidos.find((gato:any)=> gato.idGato == id);
    this.router.navigate(['/formulario-interesse'])
  }
}
