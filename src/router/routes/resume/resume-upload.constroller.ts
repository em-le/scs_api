import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

@Controller()
export class ResumeUploadController {
  @HttpCode(HttpStatus.CREATED)
  @Post('/pdf')
  async uploadPDF(): Promise<void> {
    return;
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/zip')
  async uploadZIP(): Promise<void> {
    return;
  }
}
