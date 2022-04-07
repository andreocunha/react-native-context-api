import { createContext, useState, useEffect } from "react";
import { pegarProdutos, salvarProduto } from "../servicos/requisicoes/produtos";

export const ProdutosContext = createContext({});

export function ProdutosProvider({ children }) {
    const [quantidade, setQuantidade] = useState(0);
    const [ultimosVistos, setUltimosVistos] = useState([]);

    useEffect( async () => {
        const resultado = await pegarProdutos();
        if(resultado.length > 0){
            setUltimosVistos(resultado);
            setQuantidade(resultado.length);
        }
    },[])

    async function viuProduto(produto) {
        await salvarProduto(produto);
        const novoUltimosVistos = [produto, ...ultimosVistos];
        setUltimosVistos(novoUltimosVistos);
        setQuantidade(quantidade + 1);
    }


    return (
        <ProdutosContext.Provider
            value={{
                quantidade,
                ultimosVistos,
                viuProduto,
            }}
        >
            {children}
        </ProdutosContext.Provider>
    );
}