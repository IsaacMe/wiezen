import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ScoreCurrentTableComponent } from './score-current-table.component';

describe('ScoreCurrentTableComponent', () => {
  let component: ScoreCurrentTableComponent;
  let fixture: ComponentFixture<ScoreCurrentTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreCurrentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreCurrentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
