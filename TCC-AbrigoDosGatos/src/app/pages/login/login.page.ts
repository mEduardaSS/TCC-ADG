import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
<<<<<<< HEAD
=======


>>>>>>> e37a67e1c87f5c0715ed85970114197a22ec8784
export class LoginPage implements OnInit {
  login!:FormGroup;

  constructor(private router: Router) { }
  senha:any
  email:any

  async validaLogin(){
    // let dados:any ={
    //     "email": `${this.email}`,
    //     "senha": `${this.senha}`
    //   }
    //   let res=await this.post(dados);
    //   if(res){
    //     alert("Logado com sucesso");
    //     this.router.navigate(['/home-admin']);
    //   }else{
    //     alert("Email ou senha incorretos")
    //   }

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
<<<<<<< HEAD
    return fetch(`http://casa/server/api/voluntario/login`, options)
=======
    return fetch(`http://localhost/aula/API/login.php`, options)
>>>>>>> e37a67e1c87f5c0715ed85970114197a22ec8784
    .then(res => {
      return res.json() ;
    })
    .catch(err => {
      console.log(err.json()) ;
    })
  }
}