import { TouchableOpacity, Text } from 'react-native'



export default function Button({text}: ) {

return (
    <TouchableOpacity>
        <Text style={[{ fontSize: 32}]}>
            {text !== '' ? text : "preenche certo irmao"}
        </Text>
    </TouchableOpacity>
)
}
