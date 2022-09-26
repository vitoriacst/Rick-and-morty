import Header from '../../components/header/Header';
import UseAPi from '../../hooks/useApi';

const Location = () => {
  const { location } = UseAPi('https://rickandmortyapi.com/api/location');
  console.log(location);
  return (
    <>
      <Header />
      <h1 className="text-yellow-300 font-bold p-4 text-2xl">Localização</h1>
      <div className="flex flex-wrap gap-6 p-6 justify-center">
        {location.map((local) => {
          return (
            <div className="card w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <img
                  src="https://i.pinimg.com/originals/94/a4/4e/94a44e36e36278d416c029ad1a4449ea.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{local.name}</h2>
                <h3 className="card-title">{local.type}</h3>
                <p>{local.created}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Location;
