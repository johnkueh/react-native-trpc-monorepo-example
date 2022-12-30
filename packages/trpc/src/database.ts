import { PrismaClient } from '@packages/database';
import { singleton } from 'tsyringe';

@singleton()
export class Database {
  public readonly client;

  constructor() {
    this.client = new PrismaClient();
  }
}
