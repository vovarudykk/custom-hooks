import { useState } from 'react';
import './App.css';
import useFetch from './hooks/useFetch';
import useInput from './hooks/useInput';
import useLocalStorage from './hooks/useLocalStorage';
import useTheme from './hooks/useTheme';
import useUpdateLogger from './hooks/useUpdateLogger';

function App() {
  const custom_input = useInput("Hello World", true)

  const {data, loading, error} = useFetch('https://www.reddit.com/r/news.json')

  const {theme, toggleTheme} = useTheme();

  const [dataToLocalStorage, setToLocalStorage] = useLocalStorage("key", '');

  const [log, setLog] = useState('');
  useUpdateLogger(log)
  
  if(loading) return "Loading...";

  if(error) {
    console.log(error);
    return null;
  }
  
  return (
    <div className={`App ${theme}`}>
      <button onClick={toggleTheme}>
        Change Theme
      </button>
      <form>
        <label>
          useInput
          <input {...custom_input}/>
          {custom_input.error && <span style={{color:"red"}}>{custom_input.error}</span>}
        </label>
        <label>
          useLocalStorage
          <input value={dataToLocalStorage} onChange={e => setToLocalStorage(e.target.value)}/>
        </label>
        <label>
          useUpdateLogger
          <input value={log} onChange={e => setLog(e.target.value)}/>
        </label>
      </form>
      {`Data from useFetch: ${JSON.stringify(data && data.dist)}`}
    </div>
  );
}

export default App;
