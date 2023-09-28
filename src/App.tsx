import { BrowserRouter } from "react-router-dom";
import { RoutesRoot } from "./Routes";
import { OpenDrawerProvider } from "./context/useOpenDrawer";

export default function App() {
  return (
    <OpenDrawerProvider>
      <BrowserRouter>
        <RoutesRoot />
      </BrowserRouter>
    </OpenDrawerProvider>
  );
}
