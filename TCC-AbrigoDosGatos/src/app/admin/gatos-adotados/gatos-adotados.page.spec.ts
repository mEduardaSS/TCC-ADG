import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GatosAdotadosPage } from './gatos-adotados.page';

describe('GatosAdotadosPage', () => {
  let component: GatosAdotadosPage;
  let fixture: ComponentFixture<GatosAdotadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GatosAdotadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
