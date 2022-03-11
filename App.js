import { InfoProvider } from "./src/Context/GlobalContext";
import Rotas from "./src/rotas";

export default function App() {
  return (
    <InfoProvider>
      <Rotas />
    </InfoProvider>
  );
}