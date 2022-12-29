import { singleton } from 'tsyringe';
import { PrismaClient } from '@packages/database';

@singleton()
export class Database {
  constructor() {}

  public client = new PrismaClient();
}
