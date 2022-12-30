import { singleton } from 'tsyringe';
import { Database } from '../../database';

@singleton()
export class UserService {
  constructor(private db: Database) {}

  public getUserById = async (id: string) => {
    return {
      id: id,
      name: 'John Doe',
      email: 'john.doe@gmail.com',
    };
  };
}
