import { TRPCError } from '@trpc/server';

export const UnauthenticatedError = new TRPCError({
  code: 'UNAUTHORIZED',
  message: 'Not authenticated',
});

export const ResourceNotAvailableError = new TRPCError({
  code: 'FORBIDDEN',
  message: 'Resource not available',
});
