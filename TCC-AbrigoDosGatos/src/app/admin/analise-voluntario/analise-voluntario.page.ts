import { Component, OnInit } from '@angular/core';
import { FormVoluntarioService } from 'src/app/services/formVoluntario/form-voluntario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analise-voluntario',
  templateUrl: './analise-voluntario.page.html',
  styleUrls: ['./analise-voluntario.page.scss'],
})
export class AnaliseVoluntarioPage implements OnInit {

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


  aprovar(){

    this.FormVoluntarioService.aprovarVoluntario(this.voluntarioSelecionado.idVoluntario).subscribe();

    this.router.navigate(['/home-admin']);
  }
}

