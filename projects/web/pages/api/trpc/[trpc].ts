import { appRouter, createContext } from '@packages/trpc';
import {} from '@packages/trpc';
import { createNextApiHandler } from '@trpc/server/adapters/next';

export default createNextApiHandler({
  router: appRouter,
  createContext,
});
