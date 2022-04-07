import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { ProdutosContext } from '../../Context/ProdutosContext';
import { estilos } from './estilos'

export function Produto({item}) {

  const {
    viuProduto
  } = useContext(ProdutosContext);

  return (
    <View style={estilos.cartao}>
      <Image style={estilos.imagem} source={item.imagem}/>
      <View style={estilos.textoContainer}>
        <Text style={estilos.texto}>{item.texto}</Text>
        <Text style={estilos.preco}>{item.preco}</Text>
      </View>
      <TouchableOpacity style={estilos.botaoAdicionar} onPress={() => viuProduto(item)}>
        <Text style={estilos.botaoTexto}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
