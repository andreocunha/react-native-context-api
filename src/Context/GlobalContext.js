import { createContext, useState, useEffect } from "react";
import { dark, light } from "../estilosGlobais";
import { pegarProdutos, salvarProduto } from "../servicos/requisicoes/produtos";

export const GlobalContext = createContext({});

export function InfoProvider({ children }) {
    const [usuario, setUsuario] = useState({});
    const [quantidade, setQuantidade] = useState(0);
    const [ultimosVistos, setUltimosVistos] = useState([]);
    const [tema, setTema] = useState("dark");

    const temas = {
        'dark': dark,
        'light': light
    }

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

    function login(email, senha){
        if(email === 'andre@email.com' && senha === '123'){
            setUsuario({
                nome: 'André',
                email: email,
            });
            return 'ok';
        }
        return 'Email ou senha incorretos';
    }

    return (
        <GlobalContext.Provider
            value={{
                usuario,
                quantidade,
                ultimosVistos,
                tema,
                temas: temas[tema],
                setTema,
                viuProduto,
                login
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}