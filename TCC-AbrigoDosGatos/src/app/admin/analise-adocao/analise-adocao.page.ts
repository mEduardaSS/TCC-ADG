import { Component, OnInit } from '@angular/core';
import { FormAdocaoService } from '../../services/formAdocao/form-adocao.service';


@Component({
  selector: 'app-analise-adocao',
  templateUrl: './analise-adocao.page.html',
  styleUrls: ['./analise-adocao.page.scss'],
})
export class AnaliseAdocaoPage implements OnInit {
  tutorSelecionado:any = [];
  constructor(private FormAdocaoService:FormAdocaoService) {
    this.tutorSelecionado = this.FormAdocaoService.tutorSelecionado;
  
   }

  ngOnInit() {
    console.log(this.tutorSelecionado);
  }

}
