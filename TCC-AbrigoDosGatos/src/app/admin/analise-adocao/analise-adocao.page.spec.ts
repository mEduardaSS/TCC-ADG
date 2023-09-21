import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnaliseAdocaoPage } from './analise-adocao.page';

describe('AnaliseAdocaoPage', () => {
  let component: AnaliseAdocaoPage;
  let fixture: ComponentFixture<AnaliseAdocaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnaliseAdocaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
