import logo from './logo.svg';
import './App.css';
import LoginPage from './Components/LoginPage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router';
import Homepage from './Components/Homepage';
function App() {
  return (
    <div>

      <Routes>

        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/homepage' element={<Homepage />} >
        </Route>
      </Routes>


    </div>
  );
}

export default App;
