import Header from '../../components/header/Header';

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center mt-2 p-6">
        <section className="flex items-center justify-between">
          <section className="p-8">
            <h1 className="text-white font-bold text-2xl">Sobre o seriado</h1>
            <p className="text-white font-thin">
              Criada por Justin Roiland e Dan Harmon, Rick & Morty é uma série
              animada de comédia que mostra as aventuras interdimensionais de
              Rick, a mente mais brilhante da galáxia, e seu neto Morty. Com sua
              arma capaz de criar portais para viajar no tempo-espaço, Rick leva
              Morty para explorar todos as absurdas formas de vida que o
              universo é capaz de sustentar.
            </p>
          </section>
          <img
            className="mask mask-decagon "
            src="https://bienaldolivro.com.br/wp-content/uploads/2021/07/HOME.png"
          />
        </section>
      </div>
    </>
  );
};

export default HomePage;
