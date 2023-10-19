import { Component, OnInit } from '@angular/core';
import { FormGatoService } from 'src/app/services/formGato/form-gato.service';

@Component({
  selector: 'app-editar-gato',
  templateUrl: './editar-gato.page.html',
  styleUrls: ['./editar-gato.page.scss'],
})
export class EditarGatoPage implements OnInit {

  gatoSelecionado: any = [];

  constructor(private FormGatoService:FormGatoService) {
    this.gatoSelecionado = this.FormGatoService.gatoSelecionado;
   }

  ngOnInit() {
    console.log(this.gatoSelecionado);
  }

  indiceList: any;
  listar(indice: any) {
    this.FormGatoService.select().subscribe();
    // console.log(indice);
  }

  indiceDel: any;
  apagar(indice: any) {
    this.FormGatoService.delete(indice).subscribe();
    // console.log(indice);
  }

}



