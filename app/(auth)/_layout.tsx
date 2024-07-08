
import { Redirect, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { Button } from "react-native";

export default function AuthRoutesLayout() {
  const { isSignedIn, signOut } = useAuth();
    console.log(isSignedIn)
  if (isSignedIn) {
    return <Redirect href={"/"} />;
  }

  return <Stack />;
}