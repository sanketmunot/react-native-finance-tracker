import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo"
import { Slot } from "expo-router"

const publishableKey = 'pk_test_Y29udGVudC1wb2xlY2F0LTM2LmNsZXJrLmFjY291bnRzLmRldiQ'

if (!publishableKey) {
  throw new Error('Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env')
}

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <ClerkLoaded>
        <Slot />
      </ClerkLoaded>
    </ClerkProvider>
  );
}