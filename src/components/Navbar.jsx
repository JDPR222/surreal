import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/inicio');

  const navLinks = [
    { to: "/inicio", text: "Inicio" },
    { to: "/video", text: "Video" },
    { to: "/fotografia", text: "Fotografia" },
    { to: "/motion", text: "Motion Graphics" },
    { to: "/multimedia", text: "Diseño Multimedia" },
    { to: "/produccion", text: "Producción Musical" },
    { to: "/desarrollo", text: "Desarrollo y Programación" },
    { to: "/contacto", text: "Contacto" },
  ];

  const handleLinkClick = (to) => {
    setActiveLink(to);
    setIsOpen(false);
  };

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <Link to="/hero" className="text-principal">
        <h2>SURREAL SOUL</h2>
      </Link>
      {isOpen && (
        <nav className="flex w-full screen-max-width">
          <ul className="flex flex-1 justify-center max-sm:hidden">
            {navLinks.map((link, index) => (
              <NavLink key={index} to={link.to} className={`flex-nowrap ${link.to === activeLink ? "active" : ""}`} onClick={() => handleLinkClick(link.to)}>
                <li className="flex-nowrap border-r-2 border-amber-500 px-3 py-1  text-sm cursor-pointer  hover:bg-[#292b2958]  text-gray hover:text-white transition-all">
                  {link.text}
                </li>
              </NavLink>
            ))}
          </ul>
        </nav>
      )}
      <div className="cursor-pointer flex mr-16 gap-2 max-sm:justify-end max-sm:flex-1" onClick={handleToggleMenu}>
        {isOpen ? (
          <img className="bx-flashing-hover" src="/public/assets/images/x.png" alt="close" width={18} height={18} />
        ) : (
          <img className="bx-flashing-hover" src="/public/assets/images/menu.png" alt="menu" width={25} height={25} />
        )}
      </div>
    </header>
  );
};

export default Navbar;