import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/style/app.scss';
import MainLayout from "./main/layouts/MainLayout";
import { UIProvider } from "./main/context/UIContext";
import Home from './main/pages/Home';
import TerminalPortfolio from './main/pages/TerminalPortfolio';

function App() {
  return (
    <>
      <UIProvider>
        <BrowserRouter>
          <Routes>
              <Route element={<MainLayout />}>
                <Route path="/dashboard" element={<Home />} />
              </Route>

              <Route element={<MainLayout />}>
                <Route path="/konsole" element={<TerminalPortfolio />} />
              </Route>

          </Routes>
        </BrowserRouter>
      </UIProvider>
    </>
  )
}

export default App
