import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCustomCComponent } from './btn-custom-c.component';

describe('BtnCustomCComponent', () => {
  let component: BtnCustomCComponent;
  let fixture: ComponentFixture<BtnCustomCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnCustomCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnCustomCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
