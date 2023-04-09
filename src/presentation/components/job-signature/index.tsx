interface IProps {
  jobTitle: string;
  companyName: string;
  period: string;
}

const Divisor = (): JSX.Element => {
  return <span className="hidden lg:block mx-3 text-4xl">@</span>;
};

const JobSignature = (props: IProps): JSX.Element => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center">
      <h3 className="text-2xl md:text-3xl xl:text-4xl text-main-100 font-bold">
        {props.jobTitle}
      </h3>
      <Divisor />
      <div className="flex flex-col xl:flex-row justify-center items-center">
        <p className="text-dark text-xl md:text-2xl xl:text-2xl">
          {props.companyName}
        </p>
        <span className="hidden xl:block mx-3 text-4xl">-</span>
        <p className="text-lg md:text-2xl xl:text-2xl">{props.period}</p>
      </div>
    </div>
  );
};

export default JobSignature;
