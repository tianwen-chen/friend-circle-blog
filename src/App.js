import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/create' element={<Create/>}/>
            <Route exact path='/blogs/:id' element={<BlogDetails/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
