// import { StyleSheet, Text, View } from 'react-native'
// import { StatusBar } from 'expo-status-bar'
// import React from 'react'
// import Login from './Screens/LoginScreen/Login'
// import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
// import * as SecureStore from "expo-secure-store";
// import TabNavigation from './Navigations/TabNavigation';
// import { useFonts } from 'expo-font';




// const tokenCache = {
//   async getToken(key: string) {
//     try {
//       return SecureStore.getItemAsync(key);
//     } catch (err) {
//       return null;
//     }
//   },
//   async saveToken(key: string, value: string) {
//     try {
//       return SecureStore.setItemAsync(key, value);
//     } catch (err) {
//       return;
//     }
//   },
// };



// const index = () => {

//   const [fontsLoaded, fontError] = useFonts({
//     'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
//     'outfit-medium': require('../assets/fonts/Outfit-Medium.ttf'),
//     'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
//   });


//   return (
//     <ClerkProvider
//       tokenCache={tokenCache}
//       publishableKey='pk_test_cmF0aW9uYWwtcHJhd24tNDAuY2xlcmsuYWNjb3VudHMuZGV2JA'>


//       <View style={styles.container}>


//         {/* signedIn */}
//         <SignedIn>

//           <TabNavigation />

//         </SignedIn>

//         {/* signedOut */}
//         <SignedOut>
//           <Login />
//         </SignedOut>


//         <StatusBar style='auto' />
//       </View>
//     </ClerkProvider>
//   )
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",

//   },
// });

// export default index

// ------------------------------------------------------------------------------------------------------------chat-GPT-----------------------------------------------------------------------------------------------------------------

import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Login from './Screens/LoginScreen/Login';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import TabNavigation from './Navigations/TabNavigation';
import { useFonts } from 'expo-font';

// Token cache for ClerkProvider
const tokenCache = {
  getToken: (key: string) => SecureStore.getItemAsync(key),
  saveToken: (key: string, value: string) => SecureStore.setItemAsync(key, value),
};

const Index = () => {
  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
  });

  // Check if fonts are loaded
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  // Handle potential font loading error
  if (fontError) {
    console.error(fontError);
    return <Text>Error loading fonts</Text>;
  }

  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey='pk_test_cmF0aW9uYWwtcHJhd24tNDAuY2xlcmsuYWNjb3VudHMuZGV2JA'>
      <View style={styles.container}>
        <SignedIn>
          <TabNavigation />
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
        <StatusBar style='auto' />
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Index;
