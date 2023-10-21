// import do arquivo environments
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormAdocaoService {

  constructor(private HttpClient: HttpClient) { }

  tutorSelecionado:any = [];
  

  // private readonly API = `http://localhost/aula/API/dadosAdocao/`; 
  private readonly API = environment.baseApiUrl;

  insert(dadosTutor: any){
    console.log(dadosTutor);
    return this.HttpClient.post(this.API+`dadosAdocao/insert_dadosTutor.php`, dadosTutor);
  }

  select(){
    return this.HttpClient.get(this.API+'dadosAdocao/select_dadosTutor.php');
  }

  delete(id: any) {
    console.log(id);
    return this.HttpClient.delete(this.API+'dadosAdocao/delete_dadosTutor.php?id='+ id);
  }

  aprovarTutoria(dadosTutor: any){
    console.log(dadosTutor);
    return this.HttpClient.put(this.API+'dadosAdocao/update_dadosTutorAprovado.php', dadosTutor);
  }
}

