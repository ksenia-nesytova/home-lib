import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationshipQuestionCardComponent } from './relationship-question-card.component';

describe('RelationshipQuestionCardComponent', () => {
  let component: RelationshipQuestionCardComponent;
  let fixture: ComponentFixture<RelationshipQuestionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelationshipQuestionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelationshipQuestionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
