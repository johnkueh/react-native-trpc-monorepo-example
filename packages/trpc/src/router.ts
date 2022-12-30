import 'reflect-metadata';
import { container } from 'tsyringe';
import { router } from './trpc';
import { HelloRouter } from './modules/hello';
import { UserRouter } from './modules/user';

export const appRouter = router({
  hello: container.resolve(HelloRouter).router,
  user: container.resolve(UserRouter).router,
});

export type AppRouter = typeof appRouter;
