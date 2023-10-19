import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormGatoService {

  constructor(private HttpClient: HttpClient) { }

  gatoSelecionado:any = [];

  private readonly API = `http://localhost/aula/API/dadosGato/`; 

  insert(dadosGato: any){
    console.log(dadosGato);
    return this.HttpClient.post(this.API+`insert_dadosGato.php`, dadosGato);
  }

  select(){
    return this.HttpClient.get(this.API+'select_dadosGato.php');
  }

  delete(id: any) {
    console.log(id);
    return this.HttpClient.delete(this.API+'delete_dadosGato.php?id='+ id);
  }


}
