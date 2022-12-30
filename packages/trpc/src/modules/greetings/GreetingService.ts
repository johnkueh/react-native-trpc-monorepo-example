import { singleton } from 'tsyringe';
import { Database } from '../../database';

interface GreetingInput {
  message: string | null;
}

@singleton()
export class GreetingService {
  constructor(private db: Database) {}

  public findById = async (id: number) => {
    return this.db.client.greeting.findFirst({
      where: {
        id,
      },
    });
  };

  public findByIdForUser = async (id: number, userId: string) => {
    return this.db.client.greeting.findFirst({
      where: {
        id,
        user: {
          id: userId,
        },
      },
    });
  };

  public findAllForUser = async (userId: string) => {
    return this.db.client.greeting.findMany({
      where: {
        user: {
          id: userId,
        },
      },
    });
  };

  public create = async (userId: string, greeting: GreetingInput) => {
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
