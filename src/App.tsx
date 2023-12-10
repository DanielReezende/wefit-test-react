import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";

// Routes
import { Routers } from "./routes";

// Custom Hooks
import { CartProvider } from "./hooks/useCart";

import { defaultTheme } from "./styles/themes/default";
import GlobalStyle from "./styles/global";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <ThemeProvider theme={defaultTheme}>
          <BrowserRouter>
            <GlobalStyle />
            <Routers />
          </BrowserRouter>
        </ThemeProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
