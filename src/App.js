import './App.css';
import Header from './Layout/Header/header';
import Home from './Pages/Home/home';




function App() {
  return (
    <div className="App">
      <Header/>
       <main className="main">
          <Home/>
       </main>
    </div>
  );
}

export default App;
