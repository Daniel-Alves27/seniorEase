import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryStatistics } from './category-statistics';

describe('CategoryStatistics', () => {
  let component: CategoryStatistics;
  let fixture: ComponentFixture<CategoryStatistics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryStatistics],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryStatistics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
