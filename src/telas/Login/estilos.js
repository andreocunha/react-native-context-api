import { StyleSheet } from 'react-native';

const styleFunction = (tema) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: tema.fundo,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo: {
      fontSize: 25,
      fontWeight: 'bold',
      color: tema.branco,
      marginBottom: 20,
    },
    inputArea: {
      height: 200,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      height: 40,
      width: '90%',
      backgroundColor: tema.branco,
      marginBottom: 15,
      padding: 10,
      borderRadius: 5,
    },
    botao: {
      height: 40,
      width: 100,
      backgroundColor: '#A3FEBF',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 15,
    },
    botaoTexto: {
      fontSize: 18,
      fontWeight: '400',
      color: tema.preto,
    },
  });
}

export const estilos = styleFunction;
