import { Component, output, signal } from '@angular/core';
import { RelationshipQuestionCardComponent } from '../relationship-question-card/relationship-question-card.component';
import {
  AddEntitySteps,
  STEP_LABELS,
  STEP_ORDER,
  STEP_RELATIONSHIPS,
} from './AddEntitySteps.enum';
import { EntitySectionComponent } from '../entity-section/entity-section.component';
import { EditableFieldComponent } from '../editable-field/editable-field.component';
import { TagSelectorComponent } from '../tag-selector/tag-selector.component';
import { TagListComponent } from '../tag-list/tag-list.component';

@Component({
  selector: 'app-add-entity-modal',
  imports: [
    RelationshipQuestionCardComponent,
    EntitySectionComponent,
    EditableFieldComponent,
    TagSelectorComponent,
    TagListComponent,
  ],
  templateUrl: './add-entity-modal.component.html',
  styleUrl: './add-entity-modal.component.scss',
})
export class AddEntityModalComponent {
  protected readonly STEP_RELATIONSHIPS = STEP_RELATIONSHIPS;
  protected readonly STEP_ORDER = STEP_ORDER;
  protected readonly STEP_LABELS = STEP_LABELS;
  protected readonly AddEntitySteps = AddEntitySteps;

  protected currentStep = signal(STEP_ORDER[0]);
  protected currentTags = signal<string[]>([]);

  public close = output<void>();

  onClose() {
    this.close.emit();
  }

  nextStep() {
    const currentIndex = STEP_ORDER.indexOf(this.currentStep());
    if (currentIndex < STEP_ORDER.length - 1) {
      this.currentStep.set(STEP_ORDER[currentIndex + 1]);
    }
  }

  prevStep() {
    const currentIndex = STEP_ORDER.indexOf(this.currentStep());
    if (currentIndex > 0) {
      this.currentStep.set(STEP_ORDER[currentIndex - 1]);
    }
  }

  onTagChange(updatedTags: string[]) {
    this.currentTags.set(updatedTags);
  }
}
