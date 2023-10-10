import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormAdocaoService {

  constructor(private HttpClient: HttpClient) { }

  tutorSelecionado:any = [];

  private readonly API = `http://aula/API/dadosAdocao/`; 

  insert(dadosTutor: any){
    console.log(dadosTutor);
    return this.HttpClient.post(this.API+`insert_dadosTutor.php`, dadosTutor);
  }

  select(){
    return this.HttpClient.get(this.API+'select_dadosTutor.php');
  }
}
