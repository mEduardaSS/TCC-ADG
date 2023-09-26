import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }
  senha:any
  email:any

  async validaLogin(){
    let dados:any ={
        "email": `${this.email}`,
        "senha": `${this.senha}`
      }
      let res=await this.post(dados);
      if(res){
        this.router.navigate(['/admin/home']);
        alert("Logado com sucesso");
      }else{
        alert("Email ou senha incorretos")
      }

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
    return fetch(`http://casa/server/api/voluntario/login`, options)
    .then(res => {
      return res.json() ;
    })
    .catch(err => {
      console.log(err.json()) ;
    })
  }
}