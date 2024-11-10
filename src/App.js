import "./App.css";
import DownloadApp from './components/Sections/DownloadApp.jsx';
import Footer from './components/Footer/Footer.jsx';
import CssBaseline from "@mui/material/CssBaseline";
import {Outlet} from "react-router-dom";
import Header from './components/Header/Header.jsx';

function App() {
  return (
    <div>
      <Header/>
      <CssBaseline />
      <Outlet/>
      <DownloadApp/>
      <Footer/>
    </div>
  );
}

export default App;
