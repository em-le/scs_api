import { Module, Global } from '@nestjs/common';
import {
  FileRequiredPipe,
  PDFFileSizePipe,
  PDFFileTypePipe,
  MaxPDFFilePipe,
} from './pipes';

const providers = [
  FileRequiredPipe,
  PDFFileSizePipe,
  PDFFileTypePipe,
  MaxPDFFilePipe,
];
@Global()
@Module({
  providers,
  exports: [...providers],
})
export class FileModule {}
