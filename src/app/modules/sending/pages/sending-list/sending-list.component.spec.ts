import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendingListComponent } from './sending-list.component';

describe('SendingListComponent', () => {
  let component: SendingListComponent;
  let fixture: ComponentFixture<SendingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
