import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChangePlayersModalComponent } from './change-players-modal.component';

describe('ChangePlayersModalComponent', () => {
  let component: ChangePlayersModalComponent;
  let fixture: ComponentFixture<ChangePlayersModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePlayersModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePlayersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
