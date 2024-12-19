import { CommandFactory } from 'nest-commander';
import { CommanderModule } from './commander.module';

async function bootstrap() {
  await CommandFactory.run(CommanderModule, [
    'log',
    'error',
    'warn',
    'debug',
    'verbose',
  ]);
}
bootstrap().catch((err) => {
  console.error('Fatal: ', err);
  process.exit(1);
});
