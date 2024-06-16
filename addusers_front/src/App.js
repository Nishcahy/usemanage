
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Addusers from './users/Addusers';
import Editusers from './users/Editusers';
import ViewUser from './users/ViewUser';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/adduser" element={<Addusers/>}/>
      <Route exact path="/edituser/:id" element={<Editusers/>}/>
       <Route exact path='/viewuser/:id' element={<ViewUser/>}/>
      </Routes>
    
      </Router>
      
     
    </div>
  );
}

export default App;
