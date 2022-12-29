import { singleton } from 'tsyringe';
import { Prisma } from '../../prisma';

@singleton()
export class HelloService {
  constructor(private prisma: Prisma) {}

  public getGreetings = async () => {
    return this.prisma.client.greeting.findMany();
  };

  public getGreetingForName = async (name: string) => {
    return {
      message: `Your name is: ${name}.`,
    };
  };
}
