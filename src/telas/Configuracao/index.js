import { useContext } from "react";
import { Text, View, Switch } from 'react-native';
import { GlobalContext } from "../../Context/GlobalContext";
import { estilos } from './estilos';

export default function Configuracao({ navigation }) {
  const {
    temas,
    tema,
    setTema,
  } = useContext(GlobalContext);

  const estilo = estilos(temas);

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Configuração</Text>

      <View style={estilo.inputArea}>
      <Text style={estilo.subtitulo}>Tema: {tema}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={tema === 'dark' ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => setTema(tema === 'dark' ? 'light' : 'dark')}
        value={tema === 'dark'}
      />
      </View>
    </View>
  );
}

