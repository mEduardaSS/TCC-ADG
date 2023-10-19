import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControleVoluntariosPage } from './controle-voluntarios.page';

describe('ControleVoluntariosPage', () => {
  let component: ControleVoluntariosPage;
  let fixture: ComponentFixture<ControleVoluntariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ControleVoluntariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 