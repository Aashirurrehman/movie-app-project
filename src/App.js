import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Add } from "./components/Add";

import { MovieInfo } from "./components/MovieInfo";
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
          <Route path="/movieInfo" element={<MovieInfo />}/>
          
          
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
