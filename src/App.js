
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Deshboard from './pages/Deshboard';
import Details from './pages/Details';
import Update from './pages/Update';
import AddProduct from './admin/AddProduct';
import Delete from './admin/Delete';
import Login from './pages/Login';
import Registar from './pages/Registar';
import News from './pages/News';
function App() {
  const token = localStorage.getItem('token')

  return (
    <>
      <Router>
       <Navbar/>
       <Routes>
        {
          token!== null?(<>

        <Route exact path='/' element={<News/>} />
        <Route exact path='/deshboard' element={<Deshboard/>} />
        <Route exact path='/deshboard/details/:id' element={<Details/>} />
        <Route exact path='/admin' element={<Update/>} />
        <Route exact path='/addproduct' element={<AddProduct/>} />
        <Route exact path='/delete' element={<Delete/>} />
          
          
          </>):(<> 
          
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/register' element={<Registar/>} />
            <Route exact path='/' element={<Login/>} />
            <Route exact path='/deshboard' element={<Login/>} />
            <Route exact path='/deshboard/details/:id' element={<Login/>} />
            <Route exact path='/admin' element={<Login/>} />
            <Route exact path='/addproduct' element={<Login/>} />

          
           </>)
        }
       
        
       </Routes>

      </Router>
      
      
    </> 
    
 
  );
}

export default App;
