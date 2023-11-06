// import do arquivo environments
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormGatoService {

  constructor(private HttpClient: HttpClient) { }

  gatoSelecionado:any = [];

  private readonly API = environment.baseApiUrl;

  insert(dadosGato: any){
    console.log(dadosGato);
    return this.HttpClient.post(this.API+`dadosGato/insert_dadosGato.php`, dadosGato);
  }

  select(){
    return this.HttpClient.get(this.API+'dadosGato/select_dadosGato.php');
  }

  selectAdotados(){
    return this.HttpClient.get(this.API+'dadosGato/select_dadosGatoAdotados.php');
  }

  delete(id: any) {
    console.log(id);
    return this.HttpClient.delete(this.API+'dadosGato/delete_dadosGato.php?id='+ id);
  }

  update(dadosGato: any){
    console.log(dadosGato);
    return this.HttpClient.post(this.API+'dadosGato/update_dadosGato.php', dadosGato);
  }

  definirAdotado(idGato: any, nomeTutor: any){
    console.log(idGato);
    console.log(nomeTutor);
    return this.HttpClient.put(this.API+'dadosGato/update_dadosGatoAdotado.php', {idGato:idGato, nomeTutor:nomeTutor});
  }


  selecionarGato: any[] = [];


}
