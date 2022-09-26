import { useEffect, useState } from 'react';

const UseAPi = (url) => {
  const [character, setCharacter] = useState([]);
  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data.results);
        setEpisode(data.results);
      });
  }, []);

  return { character, episode };
};

export default UseAPi;
