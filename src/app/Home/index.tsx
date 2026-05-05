
import { Text, View, StyleSheet } from 'react-native';
import  { Button } from "@components/Button";


export default function App() {
  
  return (
    <View style={[styles.container]}>

    <Text style={[styles.texto, ]}>Hello, World!

    </Text>
    <button>

    </button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto: {
    fontSize: 24,
    backgroundColor: 'tomato',
    fontWeight: '700',
      color: 'white',
  }
})

