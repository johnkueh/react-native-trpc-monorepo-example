import { singleton } from 'tsyringe';
import { Database } from '../../database';

@singleton()
export class HelloService {
  constructor(private db: Database) {}

  public getGreetings = async () => {
    return this.db.client.greeting.findMany();
  };

  public getGreetingForName = async (name: string) => {
    return {
      message: `Your name is: ${name}.`,
    };
  };
}
