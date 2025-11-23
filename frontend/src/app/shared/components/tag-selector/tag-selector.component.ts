import { Component, input, output, signal, computed, effect } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TagComponent } from "../tag/tag.component";
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-tag-selector',
  imports: [ReactiveFormsModule, TagComponent],
  templateUrl: './tag-selector.component.html',
  styleUrls: ['./tag-selector.component.scss']
})
export class TagSelectorComponent {
  // MOCK DATA
  private allTags = ['history', 'philosophy', 'sci-fi', 'art', 'russian literature', 'fantasy'];

  public selectedTags = input<string[] | null>([]);
  public tagsChange = output<string[]>();

  protected searchControl = new FormControl('', { nonNullable: true });
  protected searchQuery = toSignal(this.searchControl.valueChanges, { initialValue: '' });

  protected isDropdownOpen = signal(false);

  protected suggestions = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();

    if (!query) {
      return [];
    }

    return this.allTags.filter(tag => tag.toLowerCase().includes(query));
  });

  constructor() {
    effect(() => {
      const query = this.searchQuery();

      if (query && query.length > 0) {
        this.isDropdownOpen.set(true);
      }
    });
  }

  protected addTag(tag: string) {
    const current = this.selectedTags();

    if (current && !current.includes(tag)) {
      this.tagsChange.emit([...current, tag]);
    }

    this.searchControl.setValue('');
    this.isDropdownOpen.set(false);
  }

  protected removeTag(tag: string) {
    const tags = this.selectedTags();

    if (!tags) {
      return;
    }

    const current = tags.filter(t => t !== tag);

    this.tagsChange.emit(current);
  }

  protected focusInput() {
    this.isDropdownOpen.set(true);
  }

  protected closeList() {
    this.isDropdownOpen.set(false);
  }
}
