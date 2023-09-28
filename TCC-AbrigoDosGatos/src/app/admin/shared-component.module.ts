import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// import { MenuAdmComponent } from "./menu-adm/menu-adm.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
    imports: [
        CommonModule, IonicModule
    ],
    exports: [
        // MenuAdmComponent,
    ]
})
export class SharedComponentModule {}