import { Global, Module } from '@nestjs/common';
import { PagingService } from './services/paging.service';

@Global()
@Module({
  imports: [],
  providers: [PagingService],
  exports: [PagingService],
})
export class PaginationModule {}
