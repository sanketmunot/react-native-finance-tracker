
import { Redirect, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { Button } from "react-native";

export default function AuthRoutesLayout() {
  const { isSignedIn, signOut } = useAuth();
    console.log(isSignedIn)
  if (isSignedIn) {
    console.log('SIGNED IN')
    return <Redirect href={"/dashboard"} />;
  }

  return <Stack />;
}