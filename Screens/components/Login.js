import { View, Text, StyleSheet, Image } from 'react-native';
import { Button, TextInput } from 'react-native-web';

export default function Logi() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>

      <TextInput
      style={styles.txtinput}
      placeholder="Usuario"
      placeholderTextColor={'white'}
    />

    <TextInput
    style={styles.txtinput}
      placeholder="Senha"
      placeholderTextColor={'white'}

    />

      <Text style={styles.text}></Text>

    <Button
        title="Realizar Login"
        color='black'
    />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6', 
    padding: 20,
  },
  titulo: {
    fontSize: 30,
    textAlign: 'left',
    width: '300%',
    
  },
  viewing: {
    alignItems: 'flex-end',
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 5,
    padding: 20,
  },
  text: {
    fontSize: 20,
    alignSelf: 'flex-end',
    color: 'black', 
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  txtinput: {
    borderWidth: 1,
  }
});
