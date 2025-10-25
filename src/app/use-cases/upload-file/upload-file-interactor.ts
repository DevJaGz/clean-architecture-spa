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
    if (!isSuccess) {
      this.outputBoundary.uploaded({
        success: false,
        message: 'File upload failed',
      });
      return;
    }
    this.outputBoundary.uploaded({
      success: true,
      message: 'File uploaded successfully',
    });
  }
}
