import { singleton } from 'tsyringe';
import { z } from 'zod';
import { ResourceNotAvailableError } from '../../errors';
import { protectedProcedure, router } from '../../trpc';
import { GreetingService } from '../greetings/GreetingService';

@singleton()
export class GreetingRouter {
  constructor(private greetingService: GreetingService) {}

  private async checkBelongsToUser(id: number, userId: string) {
    if (!(await this.greetingService.findByIdForUser(id, userId))) {
      throw ResourceNotAvailableError;
    }
  }

  public router = router({
    byId: protectedProcedure.input(z.object({ id: z.number() })).query(async ({ ctx, input }) => {
      await this.checkBelongsToUser(input.id, ctx.session.id);
      return this.greetingService.findById(input.id);
    }),
    all: protectedProcedure.query(({ ctx }) => {
      return this.greetingService.findAllForUser(ctx.session.id);
    }),
    create: protectedProcedure
      .input(z.object({ message: z.string() }))
      .mutation(({ ctx, input }) => {
        return this.greetingService.create(ctx.session.id, {
          message: input.message,
        });
      }),
    update: protectedProcedure
      .input(z.object({ id: z.number(), message: z.string().nullable() }))
      .mutation(async ({ ctx, input }) => {
        await this.checkBelongsToUser(input.id, ctx.session.id);
        return this.greetingService.update(input.id, input);
      }),
    delete: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ ctx, input }) => {
        await this.checkBelongsToUser(input.id, ctx.session.id);
        return this.greetingService.delete(input.id);
      }),
  });
}
