import logo from './logo.svg';
import './App.css';
import Album from './components/Album';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <Album
          imagen="rozes"
          artista="Rozes"
          tipo="Solista"
          cancion="Under the Grave"
          an="(2016)"
          />
      </div>
      
    </div>
  );
}

export default App;
