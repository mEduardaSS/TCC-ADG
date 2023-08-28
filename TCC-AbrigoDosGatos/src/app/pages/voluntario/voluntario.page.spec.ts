import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VoluntarioPage } from './voluntario.page';

describe('VoluntarioPage', () => {
  let component: VoluntarioPage;
  let fixture: ComponentFixture<VoluntarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VoluntarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
