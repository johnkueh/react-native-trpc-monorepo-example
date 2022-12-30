import { singleton } from 'tsyringe';
import { Database } from '../../database';

interface UpdateUserInput {
  name: string;
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

  public updateUser = async (id: string, input: UpdateUserInput) => {
    return this.db.client.user.update({
      where: {
        id: id,
      },
      data: input,
    });
  };
}
