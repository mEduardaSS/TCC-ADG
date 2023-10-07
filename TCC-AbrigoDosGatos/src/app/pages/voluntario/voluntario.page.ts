import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voluntario',
  templateUrl: './voluntario.page.html',
  styleUrls: ['./voluntario.page.scss'],
})

export class VoluntarioPage implements OnInit {
  isLoading: boolean = false;
  voluntario: Voluntario = new Voluntario();
  
  constructor() { }

  ngOnInit() {
    this.voluntario = new Voluntario();
  }

}

class Voluntario{
  nome: string = '';
  email: string = '';
  telefone: string = '';
}

