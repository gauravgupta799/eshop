import './App.css';
import Header from './Layout/Header/header';
import Home from './Pages/Home/home';
import Checkout from './Pages/Checkout/checkout';
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route exact path="/checkout" element={<Checkout/>}/>
      </Routes>
    </div>
  );
}

export default App;
