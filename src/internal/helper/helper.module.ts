import { Global, Module } from '@nestjs/common';
import { HashHelper } from './services/hash.helper';
import { DateHelper } from './services/date.helper';
import { CollectionHelper } from './services/collection.helper';
import { FileHelper } from './services/file.helper';
import { EncryptionHelper } from './services/encryption.helper';

const providers = [
  DateHelper,
  CollectionHelper,
  FileHelper,
  EncryptionHelper,
  HashHelper,
];

@Global()
@Module({
  imports: [],
  providers,
  exports: [...providers],
})
export class HelperModule {}
