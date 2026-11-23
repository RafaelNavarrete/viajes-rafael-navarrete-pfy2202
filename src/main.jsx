import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from "@apollo/client";
import { worker } from "./mocks/browser";
import App from "./App.jsx";
import "./index.css";

const client = new ApolloClient({
  link: new HttpLink({ uri: "/graphql" }),
  cache: new InMemoryCache(),
});

// Primero se enciende el "falso servidor" y recién después se dibuja la app
worker
  .start({
    onUnhandledRequest: "bypass",
    serviceWorker: { url: "./mockServiceWorker.js" },
  })
  .catch((error) => console.error("MSW no pudo iniciar:", error))
  .finally(() => {
    createRoot(document.getElementById("root")).render(
      <StrictMode>
        <ApolloProvider client={client}>
          <HashRouter>
            <App />
          </HashRouter>
        </ApolloProvider>
      </StrictMode>
    );
  });