interface IProps {
  content: string | JSX.Element[];
}

const Lateral = (props: IProps): JSX.Element => {
  const renderContent = (): JSX.Element => {
    if (typeof props.content === "string") {
      const contentArray = props.content.split("").reverse();
      return (
        <div className="flex flex-col whitespace-nowrap mb-2">
          {contentArray.map((char, i) => (
            <span
              key={i}
              className=" text-main-100 text-xl -rotate-90 leading-3"
            >
              {char}
            </span>
          ))}
        </div>
      );
    }

    return <div className="space-y-2 mb-2">{props.content}</div>;
  };

  return (
    <div className="flex flex-col items-center h-full min-h-max">
      {renderContent()}
      <div className="flex flex-row justify-center flex-1">
        <div className="border-r-2 border-main-100" />
        <div />
      </div>
    </div>
  );
};

export default Lateral;
