import { Text, View, FlatList, StatusBar } from 'react-native';
import Produto from '../../componentes/Produto';
import { GlobalContext } from '../../Context/GlobalContext';
import { estilos } from './estilos';
import { useContext } from 'react';
import { Feather } from 'react-native-vector-icons'

const produto = {
  url: "https://static.vecteezy.com/ti/vetor-gratis/p1/4331717-sneaker-flat-design-long-shadow-glyph-icon-running-shoes-vector-silhouette-illustration-vetor.jpg",
  texto: "Tenis bacana",
  preco: "R$ 100,00",
}

const produtos = [
  produto,
  produto,
  produto,
  produto,
  produto,
  produto,
  produto,
  produto,
  produto,
]

export default function Principal() {
  const {
    usuario,
    quantidade,
    ultimosVistos,
    temas,
  } = useContext(GlobalContext);

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
        data={produtos}
        keyExtractor={item => Math.random()}
        renderItem={({ item }) => <Produto item={item} />}
        style={estilo.lista}
        ListHeaderComponent={() =>
          <View>
            {ultimosVistos.length > 0 &&
              <View style={estilo.ultimosVistos}>
                <Text style={estilo.tituloUltimosVistos}>Últimos vistos</Text>
                <FlatList
                  data={ultimosVistos}
                  keyExtractor={item => Math.random()}
                  renderItem={({ item }) => <Produto item={item} />}
                  style={estilo.lista}
                  horizontal
                />
              </View>}
            <Text style={estilo.titulo}>Produtos</Text>
          </View>
        }
      />
    </View>
  );
}

