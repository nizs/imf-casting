import './App.css';
import Header from './components/Header/Header';
import Imf from './components/Imf/Imf';

function App() {
  return (
    <div className="App container">
      <div id="overlay"></div>
      <Header></Header>
      <Imf></Imf>
    </div>
  );
}

export default App;
