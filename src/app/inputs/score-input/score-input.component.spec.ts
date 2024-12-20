import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ScoreInputComponent } from './score-input.component';

describe('ScoreInputComponent', () => {
  let component: ScoreInputComponent;
  let fixture: ComponentFixture<ScoreInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
