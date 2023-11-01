import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnaliseControleVoluntariosPage } from './analise-controle-voluntarios.page';

describe('AnaliseControleVoluntariosPage', () => {
  let component: AnaliseControleVoluntariosPage;
  let fixture: ComponentFixture<AnaliseControleVoluntariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnaliseControleVoluntariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
