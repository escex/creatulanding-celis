import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";

const App = ({ Component, pageProps }) => {
  return (
      <div>
        <NavBar />
      </div>
  );
};

export default App;

