import { Component, inject, signal } from '@angular/core';
import { UploadFilePresenter } from '../../interface-adapters/upload-file/upload-file-presenter';
import { UploadFileController } from '../../interface-adapters/upload-file/upload-file-controller';
import { UploadFileViewModel } from '../../interface-adapters/upload-file/upload-file-view-model';

@Component({
  selector: 'app-upload-file',
  imports: [],
  templateUrl: './upload-file.html',
  styleUrl: './upload-file.scss',
})
export class UploadFile {
  readonly #controller = inject(UploadFileController);
  readonly #presenter = inject(UploadFilePresenter);
  readonly fileName = signal<string>('');

  constructor() {
    this.#presenter.register(this.upaloaded.bind(this));
  }

  upload(event: Event): void {
    const [file] = (event.target as HTMLInputElement).files || [];
    this.#controller.upload(file);
  }

  protected upaloaded(data: UploadFileViewModel): void {
    this.fileName.set(data.fileName);
  }
}
