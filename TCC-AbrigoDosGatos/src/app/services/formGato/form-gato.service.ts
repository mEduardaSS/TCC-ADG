import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormGatoService {

  constructor(private HttpClient: HttpClient) { }

  private readonly API = `http://aula/API/dadosGato/`; 

  insert(dadosGato: any){
    console.log(dadosGato);
    return this.HttpClient.post(this.API+`insert_dadosGato.php`, dadosGato);
  }

  select(){
    return this.HttpClient.get(this.API+'select_dadosGato.php');
  }


}
