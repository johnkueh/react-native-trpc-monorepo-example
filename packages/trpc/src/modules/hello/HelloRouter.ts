import { router, publicProcedure } from '../../trpc';
import { z } from 'zod';
import { singleton } from 'tsyringe';
import { HelloService } from './HelloService';

@singleton()
export class HelloRouter {
  constructor(private helloService: HelloService) {}

  public router = router({
    all: publicProcedure.query(({ ctx }) => {
      return this.helloService.getGreetings();
    }),
    byName: publicProcedure
      .input(
        z.object({
          name: z.string(),
        })
      )
      .query(({ ctx, input }) => {
        return this.helloService.getGreetingForName(input.name);
      }),
    // create: publicProcedure
    //   .input(z.object({ title: z.string(), content: z.string() }))
    //   .mutation(({ ctx, input }) => {
    //     return ctx.prisma.post.create({ data: input });
    //   }),
  });
}
