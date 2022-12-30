import { singleton } from 'tsyringe';
import { Database } from '../../database';

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
}
