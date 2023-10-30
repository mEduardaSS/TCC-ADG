import { Component, OnInit } from '@angular/core';
import { FormAdocaoService } from '../../services/formAdocao/form-adocao.service';
import { FormGatoService } from 'src/app/services/formGato/form-gato.service';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulario-interesse',
  templateUrl: './formulario-interesse.page.html',
  styleUrls: ['./formulario-interesse.page.scss'],
})

export class FormularioInteressePage implements OnInit {

  gatoSelecionado:any = [];

  constructor(private router: Router, private FormGatoService:FormGatoService, private FormAdocaoService:FormAdocaoService, private toastController: ToastController) {
    this.gatoSelecionado = this.FormGatoService.gatoSelecionado;
    console.log(this.gatoSelecionado);
  }

  FormAdocao!: FormGroup;

  ngOnInit() {
    this.createFormAdocao();
    // console.log(this.gatoSelecionado);
  }

  createFormAdocao(){
    this.FormAdocao = new FormGroup({
      id: new FormControl('',[Validators.required]),
      nome: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      data_nascimento: new FormControl('',[Validators.required]),
      telefone: new FormControl('',[Validators.required]),
      endereco: new FormControl('',[Validators.required]),
      temTempo: new FormControl('',[Validators.required]),
      possuiAnimais: new FormControl('',[Validators.required]),
    })
  }

  async presentToast(message: any) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom',
    });
    await toast.present();
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
  get temTempo() {
    return this.FormAdocao.get('temTempo')!;
  }
  get possuiAnimais() {
    return this.FormAdocao.get('possuiAnimais')!;
  }

  message: String = "";

  submit_formAdocao(form: any){
    let dadosTutor = [];

    // if (this.FormAdocao.valid){
      console.log(form);
      dadosTutor[0] = {
        nome: form.nome,
        email: form.email,
        data_nascimento: form.data_nascimento,
        telefone: form.telefone,
        endereco: form.endereco,
        temTempo: form.temTempo,
        possuiAnimais: form.possuiAnimais,
        nomeGato: this.gatoSelecionado.nome,
        fk_IdGato: this.gatoSelecionado.idGato
      };

      this.FormAdocaoService.insert(dadosTutor[0]).subscribe((dados:any)=>{
        console.log(dados);
        if (dados.success == "1"){
          this.message = dados.message;
        }
        this.presentToast(this.message);
        this.router.navigate(['/home']);

      });

    // }

  
  }

  




}
