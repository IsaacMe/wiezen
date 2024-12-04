import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AloneScoreModalComponent } from './alone-score-modal.component';

describe('AloneScoreModalComponent', () => {
  let component: AloneScoreModalComponent;
  let fixture: ComponentFixture<AloneScoreModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AloneScoreModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AloneScoreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
