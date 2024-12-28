import { Injectable } from '@nestjs/common';
import * as fsPromise from 'fs/promises';
import * as fs from 'fs';
import { join, extname, basename } from 'path';
import bytes from 'bytes';
import * as AdmZip from 'adm-zip';
import { v4 as uuidv4 } from 'uuid';
import { IFile, IReadFile } from 'src/internal/file/interfaces/file.interface';

@Injectable()
export class FileHelper {
  private getFilePath(path: string): string {
    return join(process.cwd(), path);
  }

  read(filePath: string): Buffer {
    return fs.readFileSync(this.getFilePath(filePath));
  }

  async asyncRead(filePath: string): Promise<Buffer> {
    return fsPromise.readFile(this.getFilePath(filePath));
  }

  convertToBytes(megabytes: string): number {
    return bytes(megabytes);
  }

  private sanitizeFileName(fileName: string): string {
    return fileName
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D')
      .replace(/[<>:"/\\|?*]/g, '_')
      .trim();
  }

  async extractZipHere(zip: IFile): Promise<IReadFile[]> {
    const admZip = new AdmZip(zip.path);
    const baseName = zip.filename.split('.')[0];
    const outputDir = join(zip.destination, baseName);
    await fsPromise.mkdir(outputDir, { recursive: true });

    const zipEntries = admZip.getEntries();
    await Promise.all(
      zipEntries.map(async (entry: AdmZip.IZipEntry) => {
        if (entry.entryName.startsWith('__MACOSX')) return;

        const sanitizedEntryName = this.sanitizeFileName(entry.entryName);
        const fullPath = join(outputDir, sanitizedEntryName);

        if (entry.isDirectory) {
          await fsPromise.mkdir(fullPath, { recursive: true });
        } else {
          await fsPromise.mkdir(join(fullPath, '..'), { recursive: true });
          await fsPromise.writeFile(fullPath, entry.getData());
        }
      }),
    );
    await fsPromise.unlink(zip.path);
    return this.moveFiles(outputDir, join(outputDir, '..'));
  }

  isPdf(filePath: string): boolean {
    const buffer = this.read(filePath).toString('utf-8', 0, 5);
    return buffer === '%PDF-';
  }

  private async moveFiles(
    sourceDir: string,
    targetDir: string,
  ): Promise<IReadFile[]> {
    const files: IReadFile[] = [];
    const items = await fsPromise.readdir(sourceDir);
    await Promise.all(
      items.map(async (item) => {
        const itemPath = join(sourceDir, item);
        const stats = await fsPromise.lstat(itemPath);
        if (stats.isDirectory()) {
          await this.moveFiles(itemPath, targetDir);
          return;
        }

        const fileExtName = extname(item);
        const uniqueFileName = `${uuidv4()}${fileExtName}`;
        const uniquePath = join(targetDir, uniqueFileName);
        files.push({
          path: uniquePath,
          originalName: basename(item),
        });
        await fsPromise.rename(itemPath, uniquePath);
      }),
    );

    try {
      await fsPromise.rmdir(sourceDir, { recursive: true });
    } catch (error) {
      console.error(error);
    }
    return files;
  }
}
