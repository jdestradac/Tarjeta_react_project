import './App.css';
import Tarjeta from './componets/Card';
import { getImagens } from './componets/api';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const [inputValue, setInputValue] = useState('');

  const getData = async () => {
    try {
      setLoading(true)
      const response = await getImagens(inputValue)
      setData(response.data.hits)
    } catch (error) {
      setData([])
      console.log(error)

    } finally {
      setLoading(false)
    }

  }


  return (

    <div className='App'>
      <div className="input-button-wrapper">
        <div className="input-container">
          <input
            type="text"
            placeholder="Que queires ver..."
            className="styled-input"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />

        </div>
        <div className="button-container">
          <button onClick={getData} className="styled-button">
            Seacrh
          </button>
        </div>
      </div>
      {loading ?
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Cargando...</p>
        </div>
        :
        <div className="file">
          {data.map((item) => (
            <Tarjeta key={item.id} url={item.largeImageURL} />
          ))}
        </div>
      }

    </div>

  );
}

export default App;
