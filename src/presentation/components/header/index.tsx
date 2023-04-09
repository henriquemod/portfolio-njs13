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
  return (
    <div className="mt-4 mb-12 mx-auto">
      <ul className="flex list-none m-0 p-0 flex-wrap justify-center gap-1 lg:gap-2">
        {props.menuItens.map((item, index) =>
          renderListItem(index + 1, item.label, item.url)
        )}
      </ul>
    </div>
  );
};

export default Header;
