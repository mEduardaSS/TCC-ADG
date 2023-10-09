import { Component, OnInit } from '@angular/core';
import { FormAdocaoService } from '../../services/formAdocao/form-adocao.service';

@Component({
  selector: 'app-formulario-interesse',
  templateUrl: './formulario-interesse.page.html',
  styleUrls: ['./formulario-interesse.page.scss'],
})
export class FormularioInteressePage implements OnInit {

  constructor(private FormAdocaoService:FormAdocaoService) {}

  ngOnInit() {
  }

  submit_formAdocao(form: any){
    console.log(form);

    this.FormAdocaoService.insert(form);
  }


}
