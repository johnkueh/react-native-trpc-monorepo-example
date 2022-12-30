import { singleton } from 'tsyringe';
import { Database } from '../../database';

interface GreetingInput {
  message: string | null;
}

@singleton()
export class GreetingService {
  constructor(private db: Database) {}

  public getById = async (id: number) => {
    return this.db.client.greeting.findFirst({
      where: {
        id,
      },
    });
  };

  public getByUserId = async (userId: string) => {
    return this.db.client.greeting.findMany({
      where: {
        user: {
          id: userId,
        },
      },
    });
  };

  public createForUser = async (userId: string, greeting: GreetingInput) => {
    return this.db.client.greeting.create({
      data: {
        ...greeting,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  };

  public update = async (id: number, greeting: GreetingInput) => {
    return this.db.client.greeting.update({
      where: {
        id,
      },
      data: greeting,
    });
  };

  public delete = async (id: number) => {
    return this.db.client.greeting.delete({
      where: {
        id,
      },
    });
  };
}
