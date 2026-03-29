import { Component, computed, input, signal } from '@angular/core';
import {
  RELATIONSHIP_CONFIG,
  RelationshipType,
} from '../../enums/relationship-type';
import { EditableFieldComponent } from '../editable-field/editable-field.component';

@Component({
  selector: 'app-relationship-question-card',
  imports: [EditableFieldComponent],
  templateUrl: './relationship-question-card.component.html',
  styleUrl: './relationship-question-card.component.scss',
})
export class RelationshipQuestionCardComponent {
  public readonly type = input.required<RelationshipType>();
  protected question = computed(() => RELATIONSHIP_CONFIG[this.type()]);

  protected currentValue = signal('');

  // TEMP I'll emit later...
  protected entityRelationships = signal<
    {
      type: RelationshipType;
      target: string;
    }[]
  >([]);

  // potentially add QuestionConfig that accounts for relationship, placeholder, and the question itself

  protected addRelationship() {
    const value = this.currentValue().trim();
    if (!value) return;

    this.entityRelationships.update((list) => [
      ...list,
      {
        type: this.type(),
        target: value, //type us. we're begging
      },
    ]);

    this.currentValue.set('');

    console.log(this.entityRelationships());
  }

  protected skipQuestion() {
    //emit value to parent displaying the question
    this.currentValue.set('');
  }
}
