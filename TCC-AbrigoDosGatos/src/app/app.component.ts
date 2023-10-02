import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  menu_admin: boolean = true;
  constructor(private menu: MenuController) {}

  Clickmenu (){
    this.menu.close();
  }
}
