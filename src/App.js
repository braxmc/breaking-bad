import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/header/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      console.log(result.data)
      setItems(result.data)
      setLoading(false)
    }
    fetchItems()
  }, [query])
  
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid items={items} loading={loading} />
    </div>
  );
}

export default App;
