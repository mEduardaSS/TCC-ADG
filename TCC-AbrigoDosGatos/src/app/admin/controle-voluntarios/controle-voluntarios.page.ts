import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controle-voluntarios',
  templateUrl: './controle-voluntarios.page.html',
  styleUrls: ['./controle-voluntarios.page.scss'],
})
export class ControleVoluntariosPage implements OnInit {

  constructor() { }

  async ngOnInit() {
    console.log("oi");
    console.log( await this.pegaDadosAPI());
    console.log("oi");

  }

  async pegaDadosAPI(){
	const url = 'const url = `http://aula/API/get';

	await fetch(url)
	.then(response => response.json())
	.then((dados) => { console.log(dados) })
	.catch((_) => { console.log(_) })

  }

}
