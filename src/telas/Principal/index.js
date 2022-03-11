import { Text, View, FlatList } from 'react-native';
import Produto from '../../componentes/Produto';
import { GlobalContext } from '../../Context/GlobalContext';
import { estilos } from './estilos';
import { useContext } from 'react';

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
    data,
  } = useContext(GlobalContext);

  return (
    <View style={estilos.container}>
      <View style={estilos.tituloArea}>
        <Text style={estilos.titulo}>Produtos</Text>
        <Text style={estilos.titulo}>{data}</Text>
      </View>

      <FlatList
        data={produtos}
        keyExtractor={item => Math.random()}
        renderItem={({ item }) => <Produto item={item} />}
        style={estilos.lista}
        ListHeaderComponent={() =>
          <View style={estilos.ultimosVistos}>
            <Text style={estilos.tituloUltimosVistos}>Últimos vistos</Text>
            <FlatList
              data={produtos}
              keyExtractor={item => Math.random()}
              renderItem={({ item }) => <Produto item={item} />}
              style={estilos.lista}
              horizontal
            />
          </View>
        }
      />
    </View>
  );
}

