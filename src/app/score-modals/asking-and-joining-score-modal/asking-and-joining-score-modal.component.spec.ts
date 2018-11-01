import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskingAndJoiningScoreModalComponent } from './asking-and-joining-score-modal.component';

describe('AskingAndJoiningScoreModalComponent', () => {
  let component: AskingAndJoiningScoreModalComponent;
  let fixture: ComponentFixture<AskingAndJoiningScoreModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskingAndJoiningScoreModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskingAndJoiningScoreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
