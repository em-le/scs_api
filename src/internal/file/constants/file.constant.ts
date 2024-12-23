import { Request } from 'express';
import { extname } from 'path';
import * as fs from 'fs';
import { DateHelper } from 'src/internal/helper/services/date.helper';
import { IFile } from '../interfaces/file.interface';
import { v4 as uuidv4 } from 'uuid';

export function FileDestination(destination: string) {
  return (
    req: Request,
    file: IFile,
    callback: (error: Error | null, destination: string) => void,
  ) => {
    const uploadedUrl = `public/upload/${destination}`;

    const date = DateHelper.getDate();

    const path = `./${uploadedUrl}/${date}`;
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }
    callback(null, path);
  };
}

export function FileName() {
  return (
    req: Request,
    file: IFile,
    callback: (error: Error | null, filename: string) => void,
  ) => {
    const fileExtName = extname(file.originalname);
    callback(null, `$${uuidv4()}${fileExtName}`);
  };
}
