
import { Redirect, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { Button } from "react-native";

export default function AuthRoutesLayout() {
  const { isSignedIn, signOut } = useAuth();
  if (true) {
    return <Redirect href={"/dashboard"} />;
  }

  return <Stack />;
}