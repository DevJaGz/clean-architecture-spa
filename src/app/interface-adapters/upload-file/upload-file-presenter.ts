import {
  UploadFileOutputBoundary,
  UploadFileOutputData,
} from '../../use-cases/upload-file/upload-file-boundary';
import { UploadFileViewModel } from './upload-file-view-model';

export class UploadFilePresenter implements UploadFileOutputBoundary {
  readonly #viewModel: UploadFileViewModel = {
    fileName: '',
  };
  readonly #subscribers: Array<(data: UploadFileViewModel) => void> = [];

  subscribe(callback: (data: UploadFileViewModel) => void): void {
    this.#subscribers.push(callback);
  }

  uploaded(data: UploadFileOutputData): void {
    console.log('[PRESENTER]', data);
    if (data.success && data.file) {
      this.#viewModel.fileName = data.file.name;
      this.notify();
    }
  }

  protected notify(): void {
    for (const callback of this.#subscribers) {
      callback(this.#viewModel);
    }
  }
}
