import './App.css';
import { CardsContainer } from './components/CardsContainer';
import { Upload } from './components/UploadFoto';

function App() {
  return (
    <div className="App">
      <Upload />
      <CardsContainer />
    </div>
  );
}

export default App;
