import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DbService } from '../../services/db.service';
import { Snippet } from '../../types/snippet';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  constructor(private dbService: DbService) { }
  title = new FormControl('', [
    Validators.required
  ])
  code = new FormControl('', [
    Validators.required
  ])
  snipForm = new FormGroup({
    title: this.title,
    code: this.code
  })
  async save() {
    await this.dbService.create(this.snipForm.value as Snippet)
  }
  autoExpand(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    this.adjustHeight(textarea);
  }

  adjustHeight(textarea: HTMLTextAreaElement): void {
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight + 5) + 'px';  // Add some padding for better appearance
  }

  ngAfterViewInit() {
    const textarea = document.getElementById('code-editor') as HTMLTextAreaElement;
    if (textarea) {
      this.adjustHeight(textarea);
    }
  }
}
