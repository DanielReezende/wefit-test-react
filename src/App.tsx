import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

// Routes
import { Routers } from "./routes";

// Custom Hooks
import { CartProvider } from "./hooks/useCart";

import GlobalStyle from "./styles/global";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Routers />
        </BrowserRouter>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
