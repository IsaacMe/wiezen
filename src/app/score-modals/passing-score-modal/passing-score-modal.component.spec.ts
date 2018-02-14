import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassingScoreModalComponent } from './passing-score-modal.component';

describe('PassingScoreModalComponent', () => {
  let component: PassingScoreModalComponent;
  let fixture: ComponentFixture<PassingScoreModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassingScoreModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassingScoreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
