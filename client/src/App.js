import NavBar from './Components/NavBar';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import Cart from './Components/Cart';
import {ToastContainer} from 'react-toastify';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AddProducts from './Components/AddProducts';
import { Box } from '@material-ui/core';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './Forms/Signup';
import LoginFirst from './Forms/Login';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <ToastContainer/>
      <NavBar/>
      <Box style={{marginTop: 64}}>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/login' element={<LoginFirst/>} />
            <Route exact path='/signup' element={<Signup/>} />
            <Route exact path='/Cart' element={<Cart/>} />
            <Route exact path='/add' element={<AddProducts/>} />
            <Route  path='/' element={<NotFound/>} />
          </Routes>
          </Box>

      </BrowserRouter>
    
    </div>
  );
}

export default App;
