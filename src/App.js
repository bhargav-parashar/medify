import "./App.css";
import DownloadApp from "./components/Sections/DownloadApp.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import { MainContextProvider } from "./components/Context/MainContextProvider.jsx";

function App() {
  return (
    <div>
      <MainContextProvider>
        <ScrollToTop />
        <Header />
        <CssBaseline />
        <Outlet />
        <DownloadApp />
        <Footer />
      </MainContextProvider>
    </div>
  );
}

export default App;
