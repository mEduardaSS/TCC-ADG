import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioInteressePage } from './formulario-interesse.page';

describe('FormularioInteressePage', () => {
  let component: FormularioInteressePage;
  let fixture: ComponentFixture<FormularioInteressePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormularioInteressePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
