const Header = () => {
  return (
    <div>
      <header>
        <div className="navbar bg-base-100 bg-yellow-300">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            </div>
            <img
              src="https://imagensemoldes.com.br/wp-content/uploads/2021/04/Foto-Rick-and-Morty-PNG.png"
              className="w-16"
            />
            <a className="btn btn-ghost normal-case text-xl" href="/">
              RickAndMorty
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <a href="/personagens">Personagens</a>
                <a href="/episode">Episódios</a>
                <a href="/location">Localização</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
