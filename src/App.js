import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Imf from './components/Imf/Imf';

function App() {
  return (
    <div className="App container">
      <div id="overlay"></div>
      <Header></Header>
      <Imf></Imf>
      <Footer></Footer>
    </div>
  );
}

export default App;
