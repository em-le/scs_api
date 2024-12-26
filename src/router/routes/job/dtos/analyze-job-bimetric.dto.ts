import { IsMongoIdFiled } from 'src/internal/request/decorators';

export class AnalyzeJobBimetrictDto {
  @IsMongoIdFiled({
    isArray: true,
  })
  ids: string[];
}
