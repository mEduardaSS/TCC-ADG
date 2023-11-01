import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// import { MenuAdmComponent } from "./menu-adm/menu-adm.component";
import { IonicModule } from "@ionic/angular";
import { GatosAdotadosPipe } from './gatos-adotados.pipe';
import { AnaliseControleVoluntariosPipe } from './analise-controle-voluntarios.pipe';

@NgModule({
    imports: [
        CommonModule, IonicModule
    ],
    exports: [
        // MenuAdmComponent,
    ],
    declarations: [
      GatosAdotadosPipe,
      AnaliseControleVoluntariosPipe
    ]
})
export class SharedComponentModule {}