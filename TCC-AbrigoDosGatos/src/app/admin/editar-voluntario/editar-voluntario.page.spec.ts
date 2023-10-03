import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarVoluntarioPage } from './editar-voluntario.page';

describe('EditarVoluntarioPage', () => {
  let component: EditarVoluntarioPage;
  let fixture: ComponentFixture<EditarVoluntarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarVoluntarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
