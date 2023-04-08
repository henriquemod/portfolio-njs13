"use client";
import Styles from "./styles.module.scss";

interface IProps {
  label: string;
}

const Tag = (props: IProps): JSX.Element => {
  return (
    <div className={Styles.container}>
      <span role="tag">{props.label}</span>
    </div>
  );
};

export default Tag;
