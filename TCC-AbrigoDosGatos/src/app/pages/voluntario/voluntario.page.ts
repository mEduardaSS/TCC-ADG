import { environment } from 'src/environments/environment';
import { FormVoluntarioService } from 'src/app/services/formVoluntario/form-voluntario.service';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voluntario',
  templateUrl: './voluntario.page.html',
  styleUrls: ['./voluntario.page.scss'],
})

export class VoluntarioPage implements OnInit {

  constructor(private router: Router, private FormVoluntarioService:FormVoluntarioService, private toastController: ToastController) {
  }

  FormVoluntario!: FormGroup;

  ngOnInit() {
    this.createFormVoluntario();
    // console.log(this.gatoSelecionado);
  }

  createFormVoluntario(){
    this.FormVoluntario = new FormGroup({
      id: new FormControl('',[Validators.required]),
      nome: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      data_nascimento: new FormControl('',[Validators.required]),
      telefone: new FormControl('',[Validators.required]),
      disponibilidade: new FormControl('',[Validators.required]),
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
    return this.FormVoluntario.get('nome')!;
  }
  get email() {
    return this.FormVoluntario.get('email')!;
  }
  get data_nascimento() {
    return this.FormVoluntario.get('data_nascimento')!;
  }
  get telefone() {
    return this.FormVoluntario.get('telefone')!;
  }

  message: String = "";

  submit_formVoluntario(form: any){
    let dadosVoluntario = [];

    // if (this.FormAdocao.valid){
      console.log(form);
      dadosVoluntario[0] = {
        nome: form.nome,
        email: form.email,
        data_nascimento: form.data_nascimento,
        telefone: form.telefone,
        disponibilidade: form.disponibilidade,
       
      };

      this.FormVoluntarioService.insert(dadosVoluntario[0]).subscribe((dados:any)=>{
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




