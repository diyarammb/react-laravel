import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css" 
import Create from './pages/Create';
import View from './pages/View';
import Edit from "./pages/Edit";


function App() {
  return (

<div>
<nav className="navbar navbar-expand navbar-dark bg-dark">
<div className="navbar-nav mr-auto">
<li className="nav-item">
<Link to={"/"} className="nav-link">Home</Link>
<Link to={"/view"} className="nav-link">View</Link>
<Link to={"/create"} className="nav-link">Create</Link>
</li>
</div>
</nav> 

    <div className="container">
    <Routes>
    <Route  path='/create' element={<Create/>}/>
    <Route path='/view' element={<View/>}/>
    <Route path='/edit/:id' element={<Edit/>}/>
    </Routes>

    </div>
    </div>
  );
}

export default App;
