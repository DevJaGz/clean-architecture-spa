import { inject } from '@angular/core';
import {
  UploadFileInputBoundary,
  UploadFileInputData,
  UploadFileOutputBoundary,
} from './upload-file-boundary';
import { UploadFileDataAccess } from './upload-file-data-access';

export class UploadFileInteractor implements UploadFileInputBoundary {
  constructor(
    private readonly outputBoundary: UploadFileOutputBoundary,
    private readonly dataAccess: UploadFileDataAccess
  ) {}

  async upload(data: UploadFileInputData): Promise<void> {
    const isSuccess = await this.dataAccess.save(data.file);
    console.log('[INTERACTOR]', isSuccess);
    if (!isSuccess) {
      this.outputBoundary.uploaded({
        success: false,
        message: 'File upload failed',
        file: data.file,
      });
      return;
    }
    this.outputBoundary.uploaded({
      success: true,
      message: 'File uploaded successfully',
      file: data.file,
    });
  }
}
