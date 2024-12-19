import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as fsPromise from 'fs/promises';
import * as fs from 'fs';
import { join } from 'path';

@Injectable()
export class FileHelper {
  read(path: string): Buffer {
    try {
      return fs.readFileSync(join(process.cwd(), path));
    } catch (error) {
      throw new InternalServerErrorException({
        message: error?.message,
      });
    }
  }

  asyncRead(path: string): Promise<Buffer> {
    try {
      return fsPromise.readFile(join(process.cwd(), path));
    } catch (error) {
      throw new InternalServerErrorException({
        message: error?.message,
      });
    }
  }
}
