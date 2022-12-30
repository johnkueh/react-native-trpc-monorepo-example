import * as trpc from '@trpc/server';
import { inferAsyncReturnType } from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { container } from 'tsyringe';
import { Auth } from './auth';

export async function createContext({ req, res }: trpcNext.CreateNextContextOptions) {
  async function getUserFromHeader() {
    const auth = container.resolve(Auth);
    if (req.headers.authorization == null) return null;

    const jwt = req.headers.authorization.split(' ')[1];
    if (jwt == null) return null;

    return auth.verifyToken(jwt);
  }
  const session = await getUserFromHeader();
  return {
    session,
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
