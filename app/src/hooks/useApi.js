import { useEffect, useState } from 'react';

const UseAPi = (url) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data);
      });
  }, []);

  return { pokemons };
};

export default UseAPi;
