import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './redux/store.js';
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import { Provider as ChakraUIProvider } from "./components/ui/provider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ChakraUIProvider>
          <App />
        </ChakraUIProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
