import { UploadFileInputBoundary } from '../../use-cases/upload-file/upload-file-boundary';

export class UploadFileController {
  constructor(private readonly inputBoundary: UploadFileInputBoundary) {}

  upload(file: File): void {
    this.inputBoundary.upload({ file });
  }
}
