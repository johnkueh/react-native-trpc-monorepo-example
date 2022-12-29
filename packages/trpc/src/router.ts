import "reflect-metadata";
import { container } from "tsyringe";
import { router } from "./trpc";
import { HelloRouter } from "./modules/hello";

export const appRouter = router({
	hello: container.resolve(HelloRouter).router,
});

export type AppRouter = typeof appRouter;
