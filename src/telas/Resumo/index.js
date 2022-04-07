import { Text, View, FlatList, StatusBar, Button } from 'react-native';
import { Produto } from '../../componentes/Produto';
import { ProdutosContext } from '../../Context/ProdutosContext';
import { AutenticacaoContext } from '../../Context/AutenticacaoContext';
import { TemaContext } from '../../Context/TemaContext';
import { estilos } from './estilos';
import { useContext } from 'react';
import { Feather } from 'react-native-vector-icons'

export default function Resumo() {
  const {
    quantidade,
    ultimosVistos,
  } = useContext(ProdutosContext);

  const {
    temas,
  } = useContext(TemaContext);

  const {
    usuario
  } = useContext(AutenticacaoContext);

  const estilo = estilos(temas);

  return (
    <View style={estilo.container}>
      <StatusBar />
      <View style={estilo.tituloArea}>
        <Text style={estilo.titulo}>Olá, {usuario.nome}</Text>
        <View style={estilo.carrinhoArea}>
          <Feather name="shopping-cart" size={30} color="#fff" style={estilo.carrinhoIcon} />
          <View style={estilo.carrinhoQuantidadeArea}>
            <Text style={estilo.carrinhoQuantidade}>{quantidade}</Text>  
          </View>
        </View>
      </View>

      <FlatList
        data={ultimosVistos}
        keyExtractor={item => Math.random()}
        renderItem={({ item }) => <Produto item={item} />}
        style={estilo.lista}
        showsVerticalScrollIndicator={false}
      />

      <Button title="Continuar" onPress={() => {}} />
    </View>
  );
}

