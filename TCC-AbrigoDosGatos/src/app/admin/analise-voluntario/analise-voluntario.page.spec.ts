import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnaliseVoluntarioPage } from './analise-voluntario.page';

describe('AnaliseVoluntarioPage', () => {
  let component: AnaliseVoluntarioPage;
  let fixture: ComponentFixture<AnaliseVoluntarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnaliseVoluntarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
