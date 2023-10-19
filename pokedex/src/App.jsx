import { Link } from 'react-router-dom';
import './App.css'
import CustomRoutes from './assets/routes/Customroutes'

function App() {

  return (
    <div className='outer-pokedex'>
     <h1 id="pokedex-heading">
      <Link to="/" onClick={"/"}>Pokedex</Link>
      </h1>

     <CustomRoutes />
    </div>
  );
}

export default App;   
