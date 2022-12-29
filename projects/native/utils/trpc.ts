import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from "@packages/trpc";

export const trpc = createTRPCReact<AppRouter>();