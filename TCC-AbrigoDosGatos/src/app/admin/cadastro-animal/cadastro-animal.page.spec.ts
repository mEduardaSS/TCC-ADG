import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroAnimalPage } from './cadastro-animal.page';

describe('CadastroAnimalPage', () => {
  let component: CadastroAnimalPage;
  let fixture: ComponentFixture<CadastroAnimalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroAnimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
