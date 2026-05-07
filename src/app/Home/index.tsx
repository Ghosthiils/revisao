import { Text, View, StyleSheet } from 'react-native'
import Button from "@/components/Button";
import Input from "@/components/Input";

export default function App() {
  return (
    <View style={styles.container}>
      <Input placeholder='' />
      <Input readOnly />
      <Button text="+"
        idButton={1}
        isAtivado
        activeOpacity={0.4} />

      <Button text="+"
        idButton={3}
        isAtivado={false}
        activeOpacity={0.1} />

      <Button text="-"
        idButton={1}
        isAtivado={true}
        activeOpacity={0.4} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto: {
    fontSize: 24,
    backgroundColor: 'tomato',
    fontWeight: 700,
    color: '#f2f2f2'
  },
  button: {
    padding: 16,
    height: 24,
    paddingHorizontal: 24
  }
})