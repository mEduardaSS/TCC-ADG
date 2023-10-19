import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  menu_admin: boolean = false;
  constructor(private menu: MenuController, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("entrou")
    this.pegarRota()
  }

  rotaAtual: any


  Clickmenu() {
    this.menu.close();
    this.rotaAtual = window.location.pathname
    console.log(this.rotaAtual);
    this.verificarMenu()
  }

  pegarRota() {
    this.rotaAtual = window.location.pathname
    console.log(this.rotaAtual);
    this.verificarMenu()
  }

  verificarMenu(){
    this.menu_admin = this.rotasAdmin.includes(this.rotaAtual) ? true : false
  }
  rotasAdmin = ['/home-admin', '/ajuda-admin', '/editar-voluntario', '/analise-adocao', '/controle-voluntarios', '/admin/analise-voluntario', '/admin/cadastro-animal', '/gatos-adotados']

}
