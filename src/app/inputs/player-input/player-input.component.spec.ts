import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlayerInputComponent } from './player-input.component';

describe('PlayerInputComponent', () => {
  let component: PlayerInputComponent;
  let fixture: ComponentFixture<PlayerInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
