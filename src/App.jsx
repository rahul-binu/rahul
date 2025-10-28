import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/style/app.css';
import MainLayout from "./main/layouts/MainLayout";
import { UIProvider } from "./main/context/UIContext";
import Home from './main/pages/Home';
import TerminalPortfolio from './main/pages/TerminalPortfolio';
import { ThemeProvider } from './main/context/ThemeContext';

function App() {
  return (
    <>
      <UIProvider>
        <BrowserRouter basename="/rahul/">
          <Routes>

            
              <Route element={<MainLayout />}>
                <Route path="" element={<Home />} />
              </Route>

            <Route element={<MainLayout />}>
              <Route path="/ter" element={<TerminalPortfolio />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </UIProvider>
    </>
  )
}

export default App
