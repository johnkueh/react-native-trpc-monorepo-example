import { singleton } from 'tsyringe';
import firebaseAdmin from 'firebase-admin';

interface AuthSession {
  id: string;
  email: string;
}

@singleton()
export class Auth {
  private readonly app;
  private readonly auth;

  public constructor() {
    const app = firebaseAdmin.apps[0];

    if (!app) {
      this.app = firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert(
          JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string)
        ),
      });
    } else {
      this.app = app;
    }

    this.auth = this.app.auth();
  }

  public async verifyToken(token: string): Promise<AuthSession | null> {
    try {
      const session = await this.auth.verifyIdToken(token);
      return {
        id: session.uid,
        email: session.email ?? '',
      };
    } catch {
      return null;
    }
  }
}
