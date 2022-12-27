import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./firebaseConfig";

export function useAuthentication() {
  const [user, setUser] = useState<User | undefined | null>();

  useEffect(() => {
    const unsubscribeFromAuthStatusChanged = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
      }
    );

    return unsubscribeFromAuthStatusChanged;
  }, []);

  return {
    user,
  };
}

export async function login(email: string, password: string) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    const error = e as FirebaseError;
    console.log(error);
    switch (error.code) {
      case "auth/user-not-found":
        return "User not found";
      case "auth/invalid-email":
        return "Invalid email address";
      case "auth/wrong-password":
        return "Wrong password";
      default:
        return "Unknown error";
    }
  }
}

export async function signup(email: string, password: string) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    const error = e as FirebaseError;
    console.log(error);
    switch (error.code) {
      case "auth/email-already-in-use":
        return "Email already in use";
      case "auth/invalid-email":
        return "Invalid email";
      case "auth/weak-password":
        return error.message;
      default:
        return "Unknown error";
    }
  }
}

export function logout() {
  return signOut(auth);
}
