import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivationCard } from './motivation-card';

describe('MotivationCard', () => {
  let component: MotivationCard;
  let fixture: ComponentFixture<MotivationCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotivationCard],
    }).compileComponents();

    fixture = TestBed.createComponent(MotivationCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
