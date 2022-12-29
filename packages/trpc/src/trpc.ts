import { initTRPC, TRPCError } from "@trpc/server";

const t = initTRPC.context().create({
  // transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

// const isAuthed = t.middleware(({ ctx, next }) => {
//   if (!ctx.session) {
//     throw new TRPCError({
//       code: "UNAUTHORIZED",
//       message: "Not authenticated",
//     });
//   }

//   return next({
//     ctx: {
//       session: ctx.session,
//     },
//   });
// });

export const router = t.router;
export const publicProcedure = t.procedure;
// export const protectedProcedure = t.procedure.use(isAuthed);