import { singleton } from 'tsyringe';
import { Database } from '../../database';

interface UpdateUserInput {
  name: string;
}

interface CreateUserInput extends UpdateUserInput {
  email: string;
}

@singleton()
export class UserService {
  constructor(private db: Database) {}

  public getUserById = async (id: string) => {
    return this.db.client.user.findFirst({
      where: {
        id: id,
      },
    });
  };

  public createUser = async (id: string, input: CreateUserInput) => {
    return this.db.client.user.create({
      data: {
        id,
        ...input,
      },
    });
  };

  public updateUser = async (id: string, input: UpdateUserInput) => {
    return this.db.client.user.update({
      where: {
        id: id,
      },
      data: input,
    });
  };
}
