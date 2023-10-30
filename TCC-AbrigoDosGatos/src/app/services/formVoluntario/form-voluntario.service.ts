// import do arquivo environments
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormVoluntarioService {

  constructor(private HttpClient: HttpClient) { }

  voluntarioSelecionado:any = [];
  

  // private readonly API = `http://localhost/aula/API/dadosAdocao/`; 
  private readonly API = environment.baseApiUrl;

  insert(dadosVoluntario: any){
    console.log(dadosVoluntario);
    return this.HttpClient.post(this.API+`dadosVoluntario/insert_dadosVolun.php`, dadosVoluntario);
  }

  select(){
    return this.HttpClient.get(this.API+'dadosVoluntario/select_dadosVolun.php');
  }

  selectAprovados(){
    return this.HttpClient.get(this.API+'dadosVoluntario/select_dadosVolunAprovados.php');
  }

  delete(id: any) {
    console.log(id);
    return this.HttpClient.delete(this.API+'dadosVoluntario/delete_dadosVolun.php?id='+ id);
  }

  aprovarVoluntario(dadosVoluntario: any){
    console.log(dadosVoluntario);
    return this.HttpClient.put(this.API+'dadosVoluntario/update_dadosVolunAprovar.php', dadosVoluntario);
  }
}

