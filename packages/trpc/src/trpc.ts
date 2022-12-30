import { initTRPC } from '@trpc/server';
import { Context } from './context';
import { UnauthenticatedError } from './errors';

const t = initTRPC.context<Context>().create({
  // transformer: transformer,
  errorFormatter({ shape }) {
    return shape;
  },
});

const isAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.session) {
    throw UnauthenticatedError;
  }

  return next({
    ctx: {
      session: ctx.session,
    },
  });
});

export const middleware = t.middleware;
export const router = t.router;
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(isAuthed);
