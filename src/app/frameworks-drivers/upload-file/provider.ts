import { inject, Provider } from '@angular/core';
import { UploadFileController } from '../../interface-adapters/upload-file/upload-file-controller';
import { UploadFilePresenter } from '../../interface-adapters/upload-file/upload-file-presenter';
import {
  UploadFileOutputBoundary,
  UploadFileInputBoundary,
} from '../../use-cases/upload-file/upload-file-boundary';
import { UploadFileDataAccess } from '../../use-cases/upload-file/upload-file-data-access';
import { UploadFileInteractor } from '../../use-cases/upload-file/upload-file-interactor';
import { UploadFileService } from './upload-file-service';

export const provideUploadFile = (): Provider => {
  return [
    UploadFilePresenter,
    {
      provide: UploadFileDataAccess,
      useExisting: UploadFileService,
    },
    {
      provide: UploadFileOutputBoundary,
      useExisting: UploadFilePresenter,
    },
    {
      provide: UploadFileInputBoundary,
      useFactory: () => {
        const outputBoundary = inject(UploadFileOutputBoundary);
        const dataAccess = inject(UploadFileDataAccess);
        return new UploadFileInteractor(outputBoundary, dataAccess);
      },
    },
    {
      provide: UploadFileController,
      useFactory: () => {
        const inputBoundary = inject(UploadFileInputBoundary);
        return new UploadFileController(inputBoundary);
      },
    },
  ];
};
