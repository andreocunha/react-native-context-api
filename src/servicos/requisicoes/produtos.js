import api from "../api";

export async function pegarProdutos(){
    try {
        const resultado = await api.get('/produtos');
        return resultado.data
    }
    catch (error){
        console.log(error)
        return []
    }
}

export async function salvarProduto(produto){
  console.log(produto)
  try {
      await api.post(`/produtos`, produto);
      return 'sucesso'
  }
  catch (error){
      console.log(error)
      return 'erro'
  }
}
