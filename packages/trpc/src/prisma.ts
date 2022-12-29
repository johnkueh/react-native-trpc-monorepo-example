import { singleton } from 'tsyringe';
import { PrismaClient } from '@packages/database';

@singleton()
export class Prisma {
  constructor() {}

  public client = new PrismaClient();
}
