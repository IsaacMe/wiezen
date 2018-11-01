import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinLoseInputComponent } from './win-lose-input.component';

describe('WinLoseInputComponent', () => {
  let component: WinLoseInputComponent;
  let fixture: ComponentFixture<WinLoseInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinLoseInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinLoseInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
