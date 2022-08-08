import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Main from './components/Main';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/:category" element={ <Main /> } />
          <Route path="/" element={ <Main /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
