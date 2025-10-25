import { UploadFileInputBoundary } from '../../use-cases/upload-file/upload-file-boundary';

export class UploadFileController {
  constructor(private readonly inputBoundary: UploadFileInputBoundary) {}

  upload(file: File): void {
    console.log('[CONTROLLER] Uploading file:', file.name);
    this.inputBoundary.upload({ file });
  }
}
