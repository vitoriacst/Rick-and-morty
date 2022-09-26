import Header from '../../components/header/Header';
import UseAPi from '../../hooks/useApi';

const Episode = () => {
  const { episode } = UseAPi('https://rickandmortyapi.com/api/episode');
  return (
    <>
      <Header />
      <h1 className="text-yellow-300 font-bold p-4 text-2xl">Episódios</h1>
      <div className="flex flex-wrap gap-6 p-6 justify-center">
        {episode.map((e) => {
          return (
            <div>
              <div className="mockup-window border bg-base-300 w-96 ">
                <div className="flex justify-center px-4 py-16 bg-base-100 flex-col items-center">
                  <p className="font-bold">{e.name}</p>
                  <p className="font-mono">{e.air_date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Episode;
