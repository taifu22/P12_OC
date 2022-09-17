import './styles/style.scss';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Erreur_404 from './pages/Erreur_404'
import NavBar2 from './components/NavBar2';

function App() {
  let dataUser = '/:userId';
  return (
    <div style={{position:'relative'}} className="App">
      <NavBar />
      <BrowserRouter>
      <NavBar2 />
          <Routes>
              <Route path={'/'} exact element={<Home />}/>
              <Route path={dataUser} exact element={<Home />}/>
              <Route path='*' element={<Erreur_404 />}/> 
          </Routes>
        </BrowserRouter>  
    </div>
  );
}

export default App;
