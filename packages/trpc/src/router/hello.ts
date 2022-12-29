import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const helloRouter = router({
  all: publicProcedure.query(({ ctx }) => {
    return [
      {
        message: 'Bienvenido a tu nuevo hogar'
      },
      {
        message: 'Benvenuto nella tua nuova casa'
      },
      {
        message: 'Bienvenue dans votre nouvelle maison'
      }
    ];
  }),
  byName: publicProcedure.input(z.object({
    name: z.string(),
  })).query(({ ctx, input }) => {
    return {
      message: `Your name is: ${input.name}`
    };
  }),
  // create: publicProcedure
  //   .input(z.object({ title: z.string(), content: z.string() }))
  //   .mutation(({ ctx, input }) => {
  //     return ctx.prisma.post.create({ data: input });
  //   }),
});
