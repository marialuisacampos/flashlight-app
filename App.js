import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
//import Torch from 'react-native-torch';
import RNShake from 'react-native-shake'

const App = () => {
  const [toggle, setToggle] = React.useState(false)

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle)

  React.useEffect(() => {
    Alert.alert('Você pode chacoalhar ou clicar para ligar e desligar a lanterna.')
  }, [])
/*
  React.useEffect(() => {
    Torch.switchState(toggle);
  }, [toggle])
*/

  React.useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle)
    });

    return () => subscription.remove();
  }, [])

  return(
    <View style={toggle ? style.containerLight : style.container}>
      <TouchableOpacity onPress={handleChangeToggle}>
        <Image
          style={toggle ? style.lightingOn : style.lightingOff} 
          source={toggle ? require('./assets/icons/eco-light.png') : require('./assets/icons/eco-light-off.png')}
        />
        <Image
          style={style.dioLogo} 
          source={toggle ? require('./assets/icons/logo-dio.png') : require('./assets/icons/logo-dio-white.png')}
        />
      </TouchableOpacity>
    </View>
  )
};

export default App;


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn: {
    resizeMode: 'contain', //independente do tamanho, ela vai se adequar
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightingOff: {
    resizeMode: 'contain', //independente do tamanho, ela vai se adequar
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  dioLogo: {
    resizeMode: 'contain', //independente do tamanho, ela vai se adequar
    alignSelf: 'center',
    width: 250,
    height: 250,
  }
});