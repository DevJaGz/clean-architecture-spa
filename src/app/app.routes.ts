import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./frameworks-drivers/upload-file/upload-file').then((m) => m.UploadFile),
  },
];
