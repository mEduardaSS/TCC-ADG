import { Component, OnInit } from '@angular/core';
import { FormVoluntarioService } from 'src/app/services/formVoluntario/form-voluntario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analise-controle-voluntarios',
  templateUrl: './analise-controle-voluntarios.page.html',
  styleUrls: ['./analise-controle-voluntarios.page.scss'],
})
export class AnaliseControleVoluntariosPage implements OnInit {

  voluntarioSelecionado:any = [];

  constructor(private FormVoluntarioService:FormVoluntarioService, private router: Router) { 
    this.voluntarioSelecionado = this.FormVoluntarioService.voluntarioSelecionado;
  }

  ngOnInit() {
    console.log(this.voluntarioSelecionado);
  }

  indiceDel: any;
  apagar(indice: any) {
    this.FormVoluntarioService.delete(indice).subscribe();
    // console.log(indice);
  }

}
