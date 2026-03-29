import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEntityBtnComponent } from './add-entity-btn.component';

describe('AddEntityBtnComponent', () => {
  let component: AddEntityBtnComponent;
  let fixture: ComponentFixture<AddEntityBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEntityBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEntityBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
