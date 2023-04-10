import { useState } from "react";

export interface IMenuItem {
  label: string;
  url: string;
}

interface IProps {
  menuItens: IMenuItem[];
}

const renderListItem = (
  index: number,
  label: string,
  url: string
): JSX.Element => {
  return (
    <li key={index}>
      <a
        className="text-dark no-underline px-2 text-2xl font-bold whitespace-nowrap"
        href={url}
        target="_self"
      >
        <span className="text-main-100">{`${index
          .toString()
          .padStart(2, "0")}.`}</span>
        {`<${label} />`}
      </a>
    </li>
  );
};

const Header = (props: IProps): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const DefaultMenu = () => (
    <div className="hidden md:block">
      <ul className="flex list-none m-0 p-0 flex-wrap justify-center gap-1 lg:gap-2">
        {props.menuItens.map((item, index) =>
          renderListItem(index + 1, item.label, item.url)
        )}
      </ul>
    </div>
  );

  const MobileMenu = () => (
    <div
      className={`${
        isMenuOpen ? "block" : "hidden"
      } lg:flex lg:items-center lg:w-auto`}
    >
      <ul className="lg:hidden text-base text-white pt-4 lg:pt-0">
        {props.menuItens.map((item, index) => (
          <li
            key={index}
            className="block text-center my-5 text-2xl lg:inline-block lg:mt-0 mr-8"
          >
            <a
              href={item.url}
              className="no-underline hover:text-white"
              onClick={toggleMenu}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  const HamburgerButton = () => (
    <div className="block md:hidden self-start h-11">
      <button
        className="absolute left-4 top-4 items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
        onClick={toggleMenu}
      >
        <svg
          className="fill-current h-6 w-6"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
        </svg>
      </button>
    </div>
  );

  return (
    <div className="mb-8 lg:mt-4 lg:mb-12 flex justify-center w-screen md:w-full">
      <nav className="flex flex-col justify-between w-screen items-center bg-main-100 md:bg-white lg:bg-white py-4 px-8 lg:px-12">
        <DefaultMenu />
        <HamburgerButton />
        <MobileMenu />
      </nav>
    </div>
  );
};

export default Header;
