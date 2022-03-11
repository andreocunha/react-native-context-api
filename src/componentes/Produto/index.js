import { Text, View, Image, TouchableOpacity } from 'react-native';
import { estilos } from './estilos'

export default function Produto({item}) {
  return (
    <View style={estilos.cartao}>
      <Image style={estilos.imagem} source={{uri: item.url}}/>
      <View style={estilos.textoContainer}>
        <Text style={estilos.texto}>{item.texto}</Text>
        <Text style={estilos.preco}>{item.preco}</Text>
      </View>
      <TouchableOpacity style={estilos.botaoAdicionar}>
        <Text style={estilos.botaoTexto}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
