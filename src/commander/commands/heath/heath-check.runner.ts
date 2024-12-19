import { Command, CommandRunner } from 'nest-commander';

@Command({
  name: 'health',
  description: 'Health Check',
})
export class HealthCheckRunner extends CommandRunner {
  async run(): Promise<void> {
    console.log('OK');
  }
}
