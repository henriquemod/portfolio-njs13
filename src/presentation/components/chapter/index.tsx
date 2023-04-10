interface IProps {
  id: number;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const Chapter = (props: IProps): JSX.Element => {
  const id = props.title.trim().replaceAll(" ", "-").toLowerCase();
  return (
    <div className="flex flex-col gap-2 sm:gap-4 md:gap-6" id={`${id}-chapter`}>
      <div className="flex flex-row justify-start items-baseline">
        <span className="text-2xl mobile:text-3xl sm:text-4xl md:text-5xl">{`${props.id
          .toString()
          .padStart(2, "0")}.`}</span>
        <h2 className="text-2xl font-bold text-main-100 mobile:text-3xl sm:text-4xl md:text-5xl">{`<${props.title}>`}</h2>
      </div>
      <div className="flex flex-col">
        <p
          className={`text-xl sm:text-2xl indent-6 ${
            props.children ? "mb-1 mobile:mb-2 sm:mb-4 md:mb-6" : ""
          }`}
        >
          {props.description}
        </p>
        {props.children && (
          <div className="my-4 mx-auto" data-testid="child-box">
            {props.children}
          </div>
        )}
      </div>
      <div className="self-end">
        <h6 className="text-2xl mobile:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-75">{`</${props.title}>`}</h6>
      </div>
    </div>
  );
};

export default Chapter;
