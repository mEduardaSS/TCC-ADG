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

  selectAdotados(){
    return this.HttpClient.get(this.API+'select_dadosGatoAdotados.php');
  }

  delete(id: any) {
    console.log(id);
    return this.HttpClient.delete(this.API+'delete_dadosGato.php?id='+ id);
  }

  update(dadosGato: any){
    console.log(dadosGato);
    return this.HttpClient.put(this.API+'update_dadosGato.php', dadosGato);
  }

  definirAdotado(dadosGato: any){
    console.log(dadosGato);
    return this.HttpClient.put(this.API+'update_dadosGatoAdotado.php', dadosGato);
  }


  selecionarGato: any[] = [];


}
