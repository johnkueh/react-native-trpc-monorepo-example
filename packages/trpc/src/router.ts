import 'reflect-metadata';
import { container } from 'tsyringe';
import { GreetingRouter } from './modules/greetings';
import { UserRouter } from './modules/user';
import { router } from './trpc';

export const appRouter = router({
  user: container.resolve(UserRouter).router,
  greeting: container.resolve(GreetingRouter).router,
});

export type AppRouter = typeof appRouter;
