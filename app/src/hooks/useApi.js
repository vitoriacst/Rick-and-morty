import { useEffect, useState } from 'react';

const UseAPi = (url) => {
  const [character, setCharacter] = useState([]);
  const [episode, setEpisode] = useState([]);
  const [location, setLocation] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data.results);
        setEpisode(data.results);
        setLocation(data.results);
      });
  }, []);

  return { character, episode, location };
};

export default UseAPi;
