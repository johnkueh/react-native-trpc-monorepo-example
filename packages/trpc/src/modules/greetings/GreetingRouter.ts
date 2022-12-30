import { singleton } from 'tsyringe';
import { z } from 'zod';
import { protectedProcedure, router } from '../../trpc';
import { GreetingService } from '../greetings/GreetingService';

@singleton()
export class GreetingRouter {
  constructor(private greetingService: GreetingService) {}

  public router = router({
    byId: protectedProcedure.input(z.object({ id: z.number() })).query(({ ctx, input }) => {
      return this.greetingService.getById(input.id);
    }),
    all: protectedProcedure.query(({ ctx }) => {
      return this.greetingService.getByUserId(ctx.session.id);
    }),
    create: protectedProcedure
      .input(z.object({ message: z.string() }))
      .mutation(({ ctx, input }) => {
        return this.greetingService.createForUser(ctx.session.id, {
          message: input.message,
        });
      }),
    update: protectedProcedure
      .input(z.object({ id: z.number(), message: z.string().nullable() }))
      .mutation(({ ctx, input }) => {
        return this.greetingService.update(input.id, input);
      }),
    delete: protectedProcedure.input(z.object({ id: z.number() })).mutation(({ ctx, input }) => {
      return this.greetingService.delete(input.id);
    }),
  });
}
