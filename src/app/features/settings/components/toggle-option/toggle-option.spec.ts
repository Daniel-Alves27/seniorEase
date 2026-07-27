import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleOption } from './toggle-option';

describe('ToggleOption', () => {
  let component: ToggleOption;
  let fixture: ComponentFixture<ToggleOption>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleOption],
    }).compileComponents();

    fixture = TestBed.createComponent(ToggleOption);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
