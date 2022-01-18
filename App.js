import React from 'react'
import { StatusBar, View } from 'react-native'
import { useFonts,
  Montserrat_400Regular,
 Montserrat_400Regular_Italic,
 Montserrat_700Bold
} from '@expo-google-fonts/montserrat'
import Cesta from './src/screens/Cesta'

export default function App() {
  const [loadedFont] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold,
  });

  if (!loadedFont) return <View />

  return (
    <View>
      <StatusBar />
      <Cesta />
    </View>
  );
}


