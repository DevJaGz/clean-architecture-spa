export abstract class UploadFileInputBoundary {
  abstract upload(file: UploadFileInputData): Promise<void>;
};
export type UploadFileInputData = {
  file: File;
}

export abstract class UploadFileOutputBoundary {
  abstract uploaded(data: UploadFileOutputData): void;
};
export type UploadFileOutputData = {
  success: boolean;
  message?: string;
  file?: File;
}
