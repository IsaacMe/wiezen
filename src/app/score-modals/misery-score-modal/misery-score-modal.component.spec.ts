import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiseryScoreModalComponent } from './misery-score-modal.component';

describe('MiseryScoreModalComponent', () => {
  let component: MiseryScoreModalComponent;
  let fixture: ComponentFixture<MiseryScoreModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiseryScoreModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiseryScoreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
