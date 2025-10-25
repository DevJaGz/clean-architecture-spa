import { Injectable } from '@angular/core';
import { UploadFileDataAccess } from '../../use-cases/upload-file/upload-file-data-access';

@Injectable({
  providedIn: 'root',
})
export class UploadFileService implements UploadFileDataAccess {
  save(file: File): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`File "${file.name}" saved successfully from DATA ACCESS.`);
        resolve(true);
      }, 1000);
    });
  }
}
