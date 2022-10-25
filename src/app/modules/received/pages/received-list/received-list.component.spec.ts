import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedListComponent } from './received-list.component';

describe('ReceivedListComponent', () => {
  let component: ReceivedListComponent;
  let fixture: ComponentFixture<ReceivedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceivedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceivedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
