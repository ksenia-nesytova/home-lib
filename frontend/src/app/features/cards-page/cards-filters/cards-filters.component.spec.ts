import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsFiltersComponent } from './cards-filters.component';

describe('CardsFiltersComponent', () => {
  let component: CardsFiltersComponent;
  let fixture: ComponentFixture<CardsFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
