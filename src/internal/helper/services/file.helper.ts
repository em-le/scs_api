import { Injectable } from '@nestjs/common';
import * as fsPromise from 'fs/promises';
import * as fs from 'fs';
import { join } from 'path';
import bytes from 'bytes';

@Injectable()
export class FileHelper {
  read(path: string): Buffer {
    return fs.readFileSync(join(process.cwd(), path));
  }

  convertToBytes(megabytes: string): number {
    return bytes(megabytes);
  }

  asyncRead(path: string): Promise<Buffer> {
    return fsPromise.readFile(join(process.cwd(), path));
  }
}
