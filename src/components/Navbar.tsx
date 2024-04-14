import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from '../img/logo-navbar.avif'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  }
  return (
    <div className="flex  flex-wrap place-items-center h-24">
      <section className="flex relative mx-auto w-full h-24 ">
        <nav className="flex justify-between border border-b-pink-400   text-black w-full">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center justify-between">
            <NavLink
              className=" h-24 flex items-center"
              to="/"
            >
              <img className="h-20" src={logo} alt="Logo de la pagina web Patitas de Esperanza" />
            </NavLink>
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-6 lg:space-x-12">
              <li>
                <NavLink
                  className="hover:border-b-2 hover:border-black md:text-sm lg:text-lg"
                  to="/"
                >
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hover:border-b-2 hover:border-black md:text-sm lg:text-lg"
                  to="/collaborator-form"
                >
                  Colaboradores
                </NavLink>
              </li>
              <li>
                <NavLink className=" hover:border-b-2 hover:border-black md:text-sm lg:text-lg " to="/adoption">
                  Adopciones
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:border-b-2 hover:border-black md:text-sm lg:text-lg" to="/announcements">
                  Noticias
                </NavLink>
              </li>
            </ul>
            <button
            className=" flex-col justify-center items-center md:hidden pr-4"
            onClick={handleClick}
          >
            <span
              className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
                isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
              }`}
            ></span>
          </button>
          </div>
          {/* <!-- Responsive navbar --> */}
          {isOpen && (
            <div className="min-w-[70vw] min-h-max flex flex-col justify-between z-30 items-center fixed top-96 left-1/2  transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-custom-color shadow-custom-shadow backdrop-blur-custom-blur border border-custom-border py-32"
            >
              <nav className="flex items-center flex-col justify-center">
                <ul className="flex flex-col items-center space-y-4">
                  <li>
                    <NavLink
                      className="relative group text-xl text-black my-2" onClick={closeModal}
                      to="/"
                    >
                      Inicio
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="relative group text-xl text-black my-2" onClick={closeModal}
                      to="/collaborator-form"
                    >
                      Colaboradores
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="relative group text-xl text-black my-2" onClick={closeModal}
                      to="/adoption"
                    >
                      Adopciones
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="relative group text-xl text-black my-2" onClick={closeModal}
                      to="/announcements"
                    >
                      Noticias
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          )}

          
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
