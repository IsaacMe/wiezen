import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinLoseDnpInputComponent } from './win-lose-dnp-input.component';

describe('WinLoseDnpInputComponent', () => {
  let component: WinLoseDnpInputComponent;
  let fixture: ComponentFixture<WinLoseDnpInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinLoseDnpInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinLoseDnpInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
