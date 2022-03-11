import { createContext, useState } from "react";
import { dark, light } from "./temas";

export const GlobalContext = createContext({});

export function InfoProvider({ children }) {
    const [data, setData] = useState("ANDRE");
    const [tema, setTema] = useState("dark");

    const temas = {
        'dark': dark,
        'light': light
    }

    return (
        <GlobalContext.Provider
            value={{
                data,
                tema,
                temas: temas[tema],
                setData,
                setTema,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}