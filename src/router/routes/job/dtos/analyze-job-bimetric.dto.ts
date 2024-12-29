import { IsMongoIdFiled } from 'src/internal/request/decorators';

export class AnalyzeJobBimetricDto {
  @IsMongoIdFiled({
    isArray: true,
  })
  ids: string[];
}
