import { useAuth } from '@clerk/clerk-expo';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Tab() {
  const { isSignedIn, signOut } = useAuth();

  const handleSignOut = () => {
    console.log('signout')
    signOut()
  }
  return (
    <View style={styles.container}>
      <Text>Tab [Settings]</Text>
      <Button title="Sign Out" onPress={() => handleSignOut()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
