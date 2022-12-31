### React Native example app with the following goals:

- [x] Expo
- [x] [Authentication](https://github.com/johnkueh/react-native-expo-example/tree/monorepo/projects/native/features/auth)
- [x] [Tabbed/nested navigation](https://github.com/johnkueh/react-native-expo-example/tree/monorepo/projects/native/features/navigation)
- [x] Prettier/eslint
- [x] [Design system tokens, typography and components](https://github.com/johnkueh/react-native-expo-example/tree/monorepo/projects/native/features/design-system)
- [x] [Monorepo via yarn workspaces / turborepo](https://github.com/johnkueh/react-native-expo-example/pull/6)
- [x] [API calls via tRPC](https://github.com/johnkueh/react-native-expo-example/pull/7)
- [x] [Prisma as database](https://github.com/johnkueh/react-native-trpc-monorepo-example/pull/9)
- [x] [Server-side auth session](https://github.com/johnkueh/react-native-trpc-monorepo-example/pull/10)
- [x] [tRPC mutating server data and results on client](https://github.com/johnkueh/react-native-trpc-monorepo-example/pull/11)
- [x] [Access control](https://github.com/johnkueh/react-native-trpc-monorepo-example/pull/13)

### Before getting started

- [Prisma with PlanetScale quickstart](https://planetscale.com/docs/tutorials/prisma-quickstart)
- [Firebase quickstart](https://firebase.google.com/docs/auth/web/start)

### Getting started

- Follow [Expo's installation guide](https://docs.expo.dev/get-started/installation/)
- Copy `.env.example` and fill in your firebase and database details
- `yarn` to install all dependencies
- `yarn workspace web dev` to start the API
- `yarn workspace native start:local` to start the mobile app
