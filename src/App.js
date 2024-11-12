import "./App.css";
import DownloadApp from './components/Sections/DownloadApp.jsx';
import Footer from './components/Footer/Footer.jsx';
import CssBaseline from "@mui/material/CssBaseline";
import {Outlet} from "react-router-dom";
import Header from './components/Header/Header.jsx';
import {useState} from 'react';
import { SelectedTabContext } from "./components/Context/SelectedTabContext.jsx";

function App() {
  const [selectedTab,setSelectedTab] = useState(0);
  return (
    <div>
      <SelectedTabContext.Provider value={{selectedTab,setSelectedTab}}>
        <Header/>
        <CssBaseline />
        <Outlet/>
        <DownloadApp/>
        <Footer/>
      </SelectedTabContext.Provider>
    </div>
  );
}

export default App;
