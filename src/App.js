import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Add } from "./components/Add";
import Navbar from "./components/Navbar";
import { Playlist } from "./components/Playlist";
import { Watched } from "./components/Watched";
import { GlobalProvider } from "./context/GlobalState";
import "./lib/css/all.min.css";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Playlist/>} exact />
          <Route path="/watched" element={<Watched/>} />
          <Route path="/add" element={<Add/>}/>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
