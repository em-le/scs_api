import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { Types } from 'mongoose';
import {
  IFileMetaData,
  IResume,
  IStorage,
} from 'src/infra/repository/recruitment/interfaces';

@Exclude()
export class ResumeSerialization implements IResume {
  fileMetaData: IFileMetaData;
  storage: IStorage;

  @Expose()
  @Type(() => String)
  _id: Types.ObjectId;

  @Expose()
  @Type(() => String)
  fileName: string;

  @Expose()
  @Type(() => Boolean)
  isParsed: boolean;

  @Expose()
  @Type(() => String)
  tags: string[];

  @Expose({
    name: 'storage',
  })
  @Transform((params) => {
    const storage: IStorage = params.value;
    return storage.location;
  })
  url: string;
}
