import { Component, input, output, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-uploader',
  imports: [
    MatIconModule
  ],
  templateUrl: './uploader.component.html',
  styleUrl: './uploader.component.scss'
})
export class UploaderComponent {
  public imageUrl = input<string>('');
  public imageChange = output<string>();

  public preview = signal<string>('');
  public placeholder = input<string>('No image available');

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      this.preview.set(result);
      this.imageChange.emit(result);
    };
    reader.readAsDataURL(file);
  }
}
