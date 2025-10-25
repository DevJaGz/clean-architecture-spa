import {
  ApplicationConfig,
  inject,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { UploadFileDataAccess } from './use-cases/upload-file/upload-file-data-access';
import { UploadFileService } from './frameworks-drivers/upload-file/upload-file-service';
import {
  UploadFileInputBoundary,
  UploadFileOutputBoundary,
} from './use-cases/upload-file/upload-file-boundary';
import { UploadFileInteractor } from './use-cases/upload-file/upload-file-interactor';
import { UploadFilePresenter } from './interface-adapters/upload-file/upload-file-presenter';
import { UploadFileController } from './interface-adapters/upload-file/upload-file-controller';
import { provideUploadFile } from './frameworks-drivers/upload-file/provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideUploadFile(),
  ],
};
