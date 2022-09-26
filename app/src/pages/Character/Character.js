import React from 'react';
import Header from '../../components/header/Header';
import UseAPi from '../../hooks/useApi';

const Character = () => {
  const { character } = UseAPi('https://rickandmortyapi.com/api/character');
  console.log(character);

  return (
    <>
      <Header />
      <div className="flex flex-wrap gap-6 p-6 justify-center">
        {character.map((character) => {
          return (
            <div className="max-w-sm backdrop-blur-sm bg-white rounded-lg border border-black shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="card w-96 bg-base-100 shadow-xl">
                <span className="indicator-item badge badge-primary">
                  {character.status}
                </span>
                <figure>
                  <img src={character.image} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-blue-600">
                    {character.name}
                    <div className="badge badge-accent badge-outliney">
                      {character.species}
                    </div>
                  </h2>
                  <p></p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">
                      {character.location.name}
                    </div>
                    <div className="badge badge-outline">
                      {character.gender}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Character;
