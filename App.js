import 'react-native-gesture-handler';

import AppLoading from 'expo-app-loading';
import MainNavigation from './navigation';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

export default function App() {
  
  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/Koulen-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/TitilliumWeb-Light.ttf')
  })

  if(!loaded) return <AppLoading />

  return (
    <MainNavigation />
  );
}

