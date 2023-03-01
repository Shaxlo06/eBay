import './App.css';

import Header from './components/header/Header';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes/>
    </div>
  );
}

export default App;
