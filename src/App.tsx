import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import GlobalStyle from "./styles/global";
import { Routers } from "./routes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalStyle />
        <Routers />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
