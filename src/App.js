/**
 * @file App.js this is the file that groups all the other components and pages of the project, and contains the router
 * @author Chahouat Taoufik 
 * @see <a href="https://github.com/taifu22/P12_OC/blob/master/src/App.js">Répo GitHub</a>
 */
import './styles/style.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home'; 
import Erreur_404 from './pages/Erreur_404';
import NavBar2 from './components/NavBar2';

function App() {

  /**
   * variable that stores the number of the user
   * @type {string} 
   */
  let dataUser = '/:userId';

  return (
    <div style={{position:'relative'}} className="App">
      <NavBar />
      <BrowserRouter> 
      <NavBar2 />
          <Routes>
              <Route path={'/'} exact element={<Home />}/>
              <Route path={dataUser} exact element={<Home />}/>
              <Route path={'*'} element={<Erreur_404 />}/> 
          </Routes>
        </BrowserRouter>  
    </div>
  );
} 

export default App;
