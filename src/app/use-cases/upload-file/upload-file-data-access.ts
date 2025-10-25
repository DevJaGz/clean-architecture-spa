export abstract class UploadFileDataAccess {
  abstract save(file: File): Promise<boolean>;
}
