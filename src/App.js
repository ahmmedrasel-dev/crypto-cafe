import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import CoinDetails from './components/CoinDetails/CoinDetails';
import Coins from './components/Coins/Coins';
import BdAddress from './components/Contact/BdAddress';
import Contact from './components/Contact/Contact';
import UsaAddress from './components/Contact/UsaAddress';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/coins' element={<Coins />}></Route>
        <Route path='/coin-details/:id' element={<CoinDetails></CoinDetails>}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}>
          <Route path='bd-address' element={<BdAddress></BdAddress>}></Route>
          <Route path='usa-address' element={<UsaAddress></UsaAddress>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
