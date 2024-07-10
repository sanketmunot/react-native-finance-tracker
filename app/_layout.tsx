import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo"
import { Slot } from "expo-router"
import { SafeAreaProvider } from "react-native-safe-area-context";

const publishableKey = 'pk_test_Y29udGVudC1wb2xlY2F0LTM2LmNsZXJrLmFjY291bnRzLmRldiQ'

if (!publishableKey) {
  throw new Error('Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env')
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ClerkProvider publishableKey={publishableKey}>
        <ClerkLoaded>
          <Slot />
        </ClerkLoaded>
      </ClerkProvider>
    </SafeAreaProvider>
  );
}