import { Component, OnInit } from '@angular/core';
import { FormAdocaoService } from '../../services/formAdocao/form-adocao.service';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-formulario-interesse',
  templateUrl: './formulario-interesse.page.html',
  styleUrls: ['./formulario-interesse.page.scss'],
})
export class FormularioInteressePage implements OnInit {

  constructor(private FormAdocaoService:FormAdocaoService) {}


  FormAdocao!: FormGroup;

  ngOnInit() {
    this.createFormAdocao();
  }

  createFormAdocao(){
    this.FormAdocao = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl(''),
      email: new FormControl(''),
      data_nascimento: new FormControl(''),
      telefone: new FormControl(''),
      endereco: new FormControl(''),
    })
  }

  get nome() {
    return this.FormAdocao.get('nome')!;
  }
  get email() {
    return this.FormAdocao.get('email')!;
  }
  get data_nascimento() {
    return this.FormAdocao.get('data_nascimento')!;
  }
  get telefone() {
    return this.FormAdocao.get('telefone')!;
  }
  get endereco() {
    return this.FormAdocao.get('endereco')!;
  }

  submit_formAdocao(form: any){
    console.log(form);
    let dadosTutor = [];
    dadosTutor[0] = {
      nome: form.nome,
      email: form.email,
      data_nascimento: form.data_nascimento,
      telefone: form.telefone,
      endereco: form.endereco
    };

    this.FormAdocaoService.insert(dadosTutor[0]).subscribe();
  }

  




}
