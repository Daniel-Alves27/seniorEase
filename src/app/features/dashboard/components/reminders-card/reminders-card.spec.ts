import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemindersCard } from './reminders-card';

describe('RemindersCard', () => {
  let component: RemindersCard;
  let fixture: ComponentFixture<RemindersCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemindersCard],
    }).compileComponents();

    fixture = TestBed.createComponent(RemindersCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
