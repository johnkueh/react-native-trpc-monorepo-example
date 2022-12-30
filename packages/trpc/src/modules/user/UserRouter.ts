import { singleton } from 'tsyringe';
import { z } from 'zod';
import { protectedProcedure, router } from '../../trpc';
import { UserService } from './UserService';

@singleton()
export class UserRouter {
  constructor(private userService: UserService) {}

  public router = router({
    current: protectedProcedure.query(({ ctx }) => {
      return this.userService.getUserById(ctx.session.id);
    }),
    create: protectedProcedure.input(z.object({ name: z.string() })).mutation(({ ctx, input }) => {
      return this.userService.createUser(ctx.session.id, {
        name: input.name,
        email: ctx.session.email,
      });
    }),
    update: protectedProcedure.input(z.object({ name: z.string() })).mutation(({ ctx, input }) => {
      return this.userService.updateUser(ctx.session.id, input);
    }),
  });
}
