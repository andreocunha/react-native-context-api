import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import estilosGlobais from '../../estilosGlobais';

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: estilosGlobais.fundo,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloArea: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    marginBottom: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: estilosGlobais.titulo,
  },
  lista: {
    flex: 1,
    width: '100%',
  },
  ultimosVistos: {
    marginBottom: 16,
    backgroundColor: '#093245',
    paddingVertical: 16,
  },
  tituloUltimosVistos: {
    fontSize: 18,
    fontWeight: 'bold',
    color: estilosGlobais.titulo,
    marginHorizontal: 16,
    marginBottom: 8,
  },
});