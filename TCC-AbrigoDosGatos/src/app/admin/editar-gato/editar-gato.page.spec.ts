import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarGatoPage } from './editar-gato.page';

describe('EditarGatoPage', () => {
  let component: EditarGatoPage;
  let fixture: ComponentFixture<EditarGatoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarGatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
