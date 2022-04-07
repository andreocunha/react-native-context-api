import { AutenticacaoProvider } from "./src/Context/AutenticacaoContext";
import { ProdutosProvider } from "./src/Context/ProdutosContext";
import { TemaProvider } from "./src/Context/TemaContext";
import Rotas from "./src/rotas";

export default function App() {
  return (
    <TemaProvider>
      <AutenticacaoProvider>
        <ProdutosProvider>
          <Rotas />
        </ProdutosProvider>
      </AutenticacaoProvider>
    </TemaProvider>
  );
}