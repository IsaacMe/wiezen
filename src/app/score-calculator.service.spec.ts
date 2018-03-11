import { TestBed, inject } from '@angular/core/testing';

import { ScoreCalculatorService } from './score-calculator.service';

describe('ScoreCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScoreCalculatorService]
    });
  });

  it('should be created', inject([ScoreCalculatorService], (service: ScoreCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
