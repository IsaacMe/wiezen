import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbondanceScoreModalComponent } from './abondance-score-modal.component';

describe('AbondanceScoreModalComponent', () => {
  let component: AbondanceScoreModalComponent;
  let fixture: ComponentFixture<AbondanceScoreModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbondanceScoreModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbondanceScoreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
