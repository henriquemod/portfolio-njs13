interface IProps {
  children: React.ReactNode;
  id?: string;
  sized?: boolean;
}

const Box = (props: IProps): JSX.Element => {
  const size = props.sized ? "sm:h-96 max-w-screen-sm" : "";
  return (
    <div
      id={props.id ?? "box-card-container"}
      className={`rounded-lg shadow-lg p-4 md:p-6 lg:p-8 mobile:p-5 sm:p-6 flex flex-col justify-between ${size}`}
    >
      {props.children}
    </div>
  );
};

export default Box;
