import { initializeApp } from 'firebase/app';
// From https://stackoverflow.com/a/73352941
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence} from 'firebase/auth/react-native';

const firebaseConfig = {
  apiKey: "AIzaSyBACUWr3lGje0_g5Sra74gNv8ATBZM7UnE",
  authDomain: "werewolves-tv.firebaseapp.com",
  projectId: "werewolves-tv",
  storageBucket: "werewolves-tv.appspot.com",
  messagingSenderId: "804498108167",
  appId: "1:804498108167:web:4565bfd407f67807d41fa2"
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
