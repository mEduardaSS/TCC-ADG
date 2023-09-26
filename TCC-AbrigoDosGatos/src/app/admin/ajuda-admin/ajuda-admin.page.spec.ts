import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjudaAdminPage } from './ajuda-admin.page';

describe('AjudaAdminPage', () => {
  let component: AjudaAdminPage;
  let fixture: ComponentFixture<AjudaAdminPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjudaAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
