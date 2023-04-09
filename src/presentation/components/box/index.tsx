interface IProps {
  children: React.ReactNode;
  id?: string;
}

const Box = (props: IProps): JSX.Element => {
  return (
    <div
      id={props.id ?? "box-card-container"}
      className={`rounded-lg shadow-lg p-4 mobile:p-5 sm:p-6 md:p-7 flex flex-col justify-between mx-auto`}
    >
      {props.children}
    </div>
  );
};

export default Box;
