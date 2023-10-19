import { Component, OnInit } from '@angular/core';
import { FormAdocaoService } from '../../services/formAdocao/form-adocao.service';
import { FormGatoService } from 'src/app/services/formGato/form-gato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analise-adocao',
  templateUrl: './analise-adocao.page.html',
  styleUrls: ['./analise-adocao.page.scss'],
})
export class AnaliseAdocaoPage implements OnInit {

  tutorSelecionado:any = [];

  constructor(private FormAdocaoService:FormAdocaoService, private FormGatoService:FormGatoService, private router: Router) {
    this.tutorSelecionado = this.FormAdocaoService.tutorSelecionado;
   }

  ngOnInit() {
    console.log(this.tutorSelecionado);
  }

  indiceDel: any;
  apagar(indice: any) {
    this.FormAdocaoService.delete(indice).subscribe();
    // console.log(indice);
  }


  aprovar(){
    this.FormGatoService.definirAdotado(this.tutorSelecionado.fk_IdGato).subscribe();

    this.FormAdocaoService.aprovarTutoria(this.tutorSelecionado.idAdocao).subscribe();

    this.router.navigate(['/home-admin']);
  }
}
