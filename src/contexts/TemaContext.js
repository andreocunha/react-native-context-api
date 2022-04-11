import { createContext, useState, useEffect } from "react";
import { dark, light } from "../estilosGlobais";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TemaContext = createContext({});

export function TemaProvider({ children }) {
    const [tema, setTema] = useState("dark");

    const temas = {
        'dark': dark,
        'light': light
    }

    useEffect( async () => {
        const tema = await AsyncStorage.getItem("@tema");
        if(tema){
            setTema(tema);
        }
    },[])

    async function setTemaAtual(tema){
        await AsyncStorage.setItem("@tema", tema);
        setTema(tema);
    }

    return (
        <TemaContext.Provider
            value={{
                tema,
                temas: temas[tema],
                setTemaAtual,
            }}
        >
            {children}
        </TemaContext.Provider>
    );
}