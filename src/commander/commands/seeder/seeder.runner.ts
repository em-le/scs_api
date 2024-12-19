import { Command, CommandRunner } from 'nest-commander';
import { seeds } from './seeds';

@Command({
  name: 'seed',
  arguments: '<task>',
  subCommands: seeds,
})
export class SeederRunner extends CommandRunner {
  async run(): Promise<void> {
    return;
  }
}
