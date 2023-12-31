// import do arquivo environments
import { environment } from 'src/environments/environment';
import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  private readonly API = environment.baseApiUrl;

  login!:FormGroup;

  constructor(private router: Router, private toastController: ToastController) { }
  senha:any
  email:any

  async presentToast(message: any) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom',
    });
    await toast.present();
  }

  message: String = "";

  async validaLogin(){
    let dados:any ={
        "email": `${this.email}`,
        "senha": `${this.senha}`
      }
      console.log(dados);
      let res=await this.post(dados);
      console.log(res);
      if(res == "1"){
        this.message = dados.message
        this.router.navigate(['/home-admin']);
      }else{
        this.presentToast("Email ou senha incorretos");
      }
  
    console.log(this.login.value);
  }

 

  createFormLogin(){
    this.login = new FormGroup ({
      email: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required)
  })
  }

  ngOnInit() {
  }

  async post(dados:any){
    const options = {
      method: 'POST',
      body: JSON.stringify(dados),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return fetch(this.API+'login.php',  options)

    .then(res => {
      return res.json() ;
    })
    .catch(err => {
      console.log(err) ;
    })
  }
}