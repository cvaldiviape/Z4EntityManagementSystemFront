import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendingCreateComponent } from './sending-create.component';

describe('SendingCreateComponent', () => {
  let component: SendingCreateComponent;
  let fixture: ComponentFixture<SendingCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendingCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
