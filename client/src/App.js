import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link, Router } from '@reach/router';
import Create from './views/Create';
import Main from './views/Main';
import Edit from './views/Edit';
import Show from './views/Show';


function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h1 className="navbar-brand">Pet Shelter</h1>
        
        <div className="collapse navbar-collapse">

          <div className="navbar-nav mr-auto">
          </div>
          
          <span className="navbar-text">

          <Link to="/">
            <span className="btn btn-sm btn-outline-primary mr-2">Home</span>
          </Link>

          <Link to="/new">
            <span className="btn btn-sm btn-outline-primary">Add Pet</span>
          </Link>

          </span>
        </div>
      </nav>

    <Router>
      <Create path="/new" />
      <Main path="/" />
      <Edit path="/edit/:id" />
      <Show path="/details/:id" />

    </Router>



    </div>
  );
}

export default App;
