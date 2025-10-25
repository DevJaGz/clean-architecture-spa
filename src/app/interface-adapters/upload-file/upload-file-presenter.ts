import {
  UploadFileOutputBoundary,
  UploadFileOutputData,
} from '../../use-cases/upload-file/upload-file-boundary';
import { UploadFileViewModel } from './upload-file-view-model';

export class UploadFilePresenter implements UploadFileOutputBoundary {
  readonly #viewModel: UploadFileViewModel = {
    fileName: '',
  };
  readonly #callbacks: Array<(data: UploadFileViewModel) => void> = [];

  register(callback: (data: UploadFileViewModel) => void): void {
    this.#callbacks.push(callback);
  }

  uploaded(data: UploadFileOutputData): void {
    if (data.success && data.file) {
      this.#viewModel.fileName = data.file.name;
      this.notify();
    }
  }

  protected notify(): void {
    for (const callback of this.#callbacks) {
      callback(this.#viewModel);
    }
  }
}
