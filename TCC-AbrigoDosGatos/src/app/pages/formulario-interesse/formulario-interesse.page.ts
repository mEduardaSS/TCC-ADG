import { Component, OnInit } from '@angular/core';
import { FormAdocaoService } from '../../services/formAdocao/form-adocao.service';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-formulario-interesse',
  templateUrl: './formulario-interesse.page.html',
  styleUrls: ['./formulario-interesse.page.scss'],
})
export class FormularioInteressePage implements OnInit {

  constructor(private FormAdocaoService:FormAdocaoService, private toastController: ToastController) {}


  FormAdocao!: FormGroup;

  ngOnInit() {
    this.createFormAdocao();
  }

  createFormAdocao(){
    this.FormAdocao = new FormGroup({
      id: new FormControl('',[Validators.required]),
      nome: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      data_nascimento: new FormControl('',[Validators.required]),
      telefone: new FormControl('',[Validators.required]),
      endereco: new FormControl('',[Validators.required]),
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
        endereco: form.endereco
      };
      this.FormAdocaoService.insert(dadosTutor[0]).subscribe((dados:any)=>{
        if (dados.success == "1"){
          this.message = dados.message;
          this.presentToast(this.message);
        }
      });


    // }

  
  }

  




}
