import Styles from "./styles.module.scss";

interface IProps {
  jobTitle: string;
  companyName: string;
  period: string;
}

const Divisor = (): JSX.Element => {
  return <span className={Styles.divisor}>@</span>;
};

const JobSignature = (props: IProps): JSX.Element => {
  return (
    <div className={Styles.container}>
      <h3>{props.jobTitle}</h3>
      <Divisor />
      <div className={Styles.rightContainer}>
        <p>{props.companyName}</p>
        <span className={Styles.periodDivisor}>-</span>
        <p>{props.period}</p>
      </div>
    </div>
  );
};

export default JobSignature;
