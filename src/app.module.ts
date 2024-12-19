import { Module } from '@nestjs/common';
import { InternalModule } from './internal/internal.module';
import { RouterModule } from './router/router.module';

@Module({
  imports: [InternalModule, RouterModule.register()],
  controllers: [],
  providers: [],
})
export class AppModule {}
