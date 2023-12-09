import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./assets/styles/global";
import { Routers } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routers />
    </BrowserRouter>
  );
}

export default App;
