import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route } 
from "react-router-dom";

import { ThemeProvider } from '@mui/system';
import CssBaseline from "@mui/material/CssBaseline";
import theme from './theme';

import PageLayout from './components/PageLayout';

import Home from './pages/Home';
import AddDriver from './pages/AddDriver';
import UpdateDriver from './pages/UpdateDriver';
import NotFound from './pages/NotFound';

import { DriversProvider } from "./context/driver.context"

function App() {
  return (
    <>
      <Router>
        <CssBaseline />
          <ThemeProvider theme={theme}>
            <DriversProvider>
              <Routes>
                <Route path="/" element={<PageLayout />}>
                  <Route index element={<Home />} />
                  <Route path="/add" element={<AddDriver />} />
                  <Route path="/update/:id" element={<UpdateDriver />} />
                  <Route parth="*" element={<NotFound />} />
                </Route>
              </Routes>
            </DriversProvider>
          </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
