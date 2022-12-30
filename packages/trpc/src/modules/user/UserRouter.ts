import { router, publicProcedure, protectedProcedure } from '../../trpc';
import { z } from 'zod';
import { singleton } from 'tsyringe';
import { UserService } from './UserService';

@singleton()
export class UserRouter {
  constructor(private userService: UserService) {}

  public router = router({
    current: protectedProcedure.query(({ ctx }) => {
      return this.userService.getUserById(ctx.session.id);
    }),
  });
}
