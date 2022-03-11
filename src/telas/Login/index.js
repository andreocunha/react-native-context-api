import { useContext } from "react";
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { GlobalContext } from "../../Context/GlobalContext";
import { estilos } from './estilos';

export default function Login({ navigation }) {
  const {
    data,
    setData,
    temas,
  } = useContext(GlobalContext);

  const estilo = estilos(temas);

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Login</Text>

      <View style={estilo.inputArea}>
        <TextInput
          style={estilo.input}
          placeholder="Email"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={data}
          onChangeText={(text) => setData(text)}
        />
        <TextInput
          style={estilo.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          autoCapitalize="none"
        />
      </View>

      <TouchableOpacity
        style={estilo.botao}
        onPress={() => navigation.navigate('Principal')}
      >
        <Text style={estilo.botaoTexto}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

