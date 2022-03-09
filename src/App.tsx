import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.tsx/Navbar';
import CountryList from './pages/CountryList/CountryList';
import CountryDetails from './pages/CountryDetails/CountryDetails'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/:code" element={<CountryDetails />}  />
      </Routes>
    </div>
  );
}

export default App;
